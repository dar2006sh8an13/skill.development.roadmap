const express = require('express');
const router = express.Router();

// Mock signup - always succeeds
router.post('/signup', (req, res) => {
    console.log('📝 Mock signup request:', req.body);

    setTimeout(() => {
        res.json({
            message: 'Account created successfully! You can now login.',
            token: 'mock-jwt-token-' + Date.now(),
            user: {
                id: 1,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            }
        });
    }, 500); // Simulate network delay
});

// Mock login - always succeeds
router.post('/login', (req, res) => {
    console.log('🔐 Mock login request:', req.body);

    setTimeout(() => {
        res.json({
            message: 'Login successful',
            token: 'mock-jwt-token-' + Date.now(),
            user: {
                id: 1,
                name: 'Test User',
                email: req.body.identifier,
                phone: '+1234567890'
            }
        });
    }, 500);
});

// Mock forgot password - always succeeds
router.post('/forgot-password', (req, res) => {
    console.log('🔑 Mock forgot password:', req.body);

    setTimeout(() => {
        res.json({
            message: 'Password reset initiated. Please enter your new password.',
            email: req.body.identifier
        });
    }, 500);
});

// Mock reset password - always succeeds
router.post('/reset-password', (req, res) => {
    console.log('🔄 Mock reset password:', req.body);

    setTimeout(() => {
        res.json({
            message: 'Password reset successful! You can now login with your new password.'
        });
    }, 500);
});

// Mock get current user
router.get('/me', (req, res) => {
    console.log('👤 Mock get current user');

    res.json({
        user: {
            id: 1,
            name: 'Test User',
            email: 'test@example.com',
            phone: '+1234567890',
            created_at: new Date()
        }
    });
});

console.log('⚠️  MOCK AUTH ROUTES ACTIVE - No database required!');
console.log('   All authentication requests will succeed automatically.');
console.log('   This is for UI/UX testing only.');

module.exports = router;
