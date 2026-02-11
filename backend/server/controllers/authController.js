const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

require('dotenv').config();



// Helper: Generate JWT token
const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            phone: user.phone,
            name: user.name
        },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
};

/**
 * POST /api/auth/signup
 * Register new user (auto-verified)
 */
const signup = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        // Validate inputs
        if (!name || !email || !phone || !password) {
            return res.status(400).json({
                error: 'Name, email, phone, and password are required'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        // Password validation (min 6 characters)
        if (password.length < 6) {
            return res.status(400).json({
                error: 'Password must be at least 6 characters'
            });
        }

        // Phone validation (basic check)
        if (phone.length < 10) {
            return res.status(400).json({
                error: 'Phone number must be at least 10 digits'
            });
        }

        // Check if user already exists
        const [existingUsers] = await db.query(
            'SELECT * FROM users WHERE email = ? OR phone = ?',
            [email, phone]
        );

        if (existingUsers.length > 0) {
            return res.status(400).json({
                error: 'User with this email or phone already exists'
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user (auto-verified)
        const [result] = await db.query(
            `INSERT INTO users (name, email, phone, password, is_verified) 
             VALUES (?, ?, ?, ?, ?)`,
            [name, email, phone, hashedPassword, true]
        );

        // Get the created user
        const [users] = await db.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
        const user = users[0];

        // Generate JWT token for auto-login
        const token = generateToken(user);

        res.status(201).json({
            message: 'Account created successfully! You can now login.',
            token: token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ error: 'Signup failed. Please try again.' });
    }
};



/**
 * POST /api/auth/login
 * Login with email/phone and password
 */
const login = async (req, res) => {
    try {
        const { identifier, password } = req.body; // identifier can be email or phone

        if (!identifier || !password) {
            return res.status(400).json({
                error: 'Email/phone and password are required'
            });
        }

        // Find user by email or phone
        const [users] = await db.query(
            'SELECT * FROM users WHERE email = ? OR phone = ?',
            [identifier, identifier]
        );

        if (users.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = users[0];



        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = generateToken(user);

        res.json({
            message: 'Login successful',
            token: token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed. Please try again.' });
    }
};

/**
 * POST /api/auth/forgot-password
 * Initiate password reset (simplified - no OTP)
 */
const forgotPassword = async (req, res) => {
    try {
        const { identifier } = req.body; // email or phone

        if (!identifier) {
            return res.status(400).json({
                error: 'Email or phone is required'
            });
        }

        // Find user
        const [users] = await db.query(
            'SELECT * FROM users WHERE email = ? OR phone = ?',
            [identifier, identifier]
        );

        if (users.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = users[0];

        res.json({
            message: 'Password reset initiated. Please enter your new password.',
            email: user.email
        });
    } catch (error) {
        console.error('Forgot password error:', error);
        res.status(500).json({ error: 'Failed to initiate password reset. Please try again.' });
    }
};

/**
 * POST /api/auth/reset-password
 * Reset password (simplified - no OTP required)
 */
const resetPassword = async (req, res) => {
    try {
        const { identifier, newPassword } = req.body;

        if (!identifier || !newPassword) {
            return res.status(400).json({
                error: 'Identifier and new password are required'
            });
        }

        // Password validation
        if (newPassword.length < 6) {
            return res.status(400).json({
                error: 'Password must be at least 6 characters'
            });
        }

        // Find user
        const [users] = await db.query(
            'SELECT * FROM users WHERE email = ? OR phone = ?',
            [identifier, identifier]
        );

        if (users.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = users[0];

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password
        await db.query(
            'UPDATE users SET password = ? WHERE id = ?',
            [hashedPassword, user.id]
        );

        res.json({
            message: 'Password reset successful! You can now login with your new password.'
        });
    } catch (error) {
        console.error('Reset password error:', error);
        res.status(500).json({ error: 'Password reset failed. Please try again.' });
    }
};

/**
 * GET /api/auth/me
 * Get current user info (protected route)
 */
const getCurrentUser = async (req, res) => {
    try {
        const userId = req.user.id; // From JWT middleware

        const [users] = await db.query(
            'SELECT id, name, email, phone, created_at FROM users WHERE id = ?',
            [userId]
        );

        if (users.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ user: users[0] });
    } catch (error) {
        console.error('Get current user error:', error);
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
};

module.exports = {
    signup,
    login,
    forgotPassword,
    resetPassword,
    getCurrentUser
};
