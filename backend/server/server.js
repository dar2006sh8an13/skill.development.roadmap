const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});
// app.use(express.static(path.join(__dirname, '../public')));

const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/authRoutes');
const mockAuthRoutes = require('./routes/mockAuth');

// Routes
app.use('/api', apiRoutes);

// CHOOSE ONE:
// Option 1: Real authentication (requires database)
// app.use('/api/auth', authRoutes);

// Option 2: Mock authentication (no database needed - for UI testing only)
// CURRENTLY ACTIVE - Mock mode enabled for testing
app.use('/api/auth', mockAuthRoutes);

// Root Route for Render Health Check
app.get('/', (req, res) => {
    res.send('API is running');
});

// Fallback to index.html for SPA-like navigation (if needed, or just 404)
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// Export app for use in index.js
module.exports = app;
