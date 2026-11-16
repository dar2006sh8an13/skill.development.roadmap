<div align="center">

# 🎯 Skill Development Roadmap

**A full-stack learning and authentication platform with account verification and roadmap resources.**

[![Node.js](https://img.shields.io/badge/Node.js-runtime-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/) [![Authentication](https://img.shields.io/badge/Auth-JWT%20%2B%20OTP-6C5CE7)](#authentication)

</div>

## 📚 Contents

- [Overview](#overview)
- [Features](#features)
- [Setup and configuration](#setup-instructions)
- [API reference](#api-endpoints)
- [User flow](#user-flow)
- [Testing](#testing)

## Overview

This repository combines a skill-development roadmap experience with a MySQL-backed authentication flow. The existing project documentation below contains the environment setup, API routes, user journey, and deployment steps.

## Features

- Email OTP verification and password reset
- JWT-based login and protected routes
- Roadmap, skill, project, and practice resource endpoints
- Frontend/backend deployment guidance

---

# Skill Development Roadmap - Authentication System

Complete authentication system with MySQL database, JWT tokens, and OTP verification.

## 🚀 Features

- ✅ User signup with email verification
- ✅ OTP-based email verification
- ✅ Login with email or phone
- ✅ JWT token authentication
- ✅ Forgot password with OTP reset
- ✅ Protected routes
- ✅ Modern, responsive UI

## 📋 Prerequisites

1. **MySQL Database** (choose one):
   - [PlanetScale](https://planetscale.com/) (recommended, free tier)
   - [Railway](https://railway.app/) (free tier)
   - [Aiven](https://aiven.io/) (free tier)
   - AWS RDS (paid)

2. **Email Service** (choose one):
   - Gmail with App Password (easiest for testing)
   - SendGrid (recommended for production)
   - AWS SES (production-grade)

## 🛠️ Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the `backend/` directory:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# Database (from your MySQL provider)
DB_HOST=your-database-host.com
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name

# JWT Secret (generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
JWT_SECRET=your-super-secret-jwt-key

# Email (Gmail example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=noreply@yourdomain.com
EMAIL_FROM_NAME=Skill Development Roadmap
```

#### Getting Gmail App Password:
1. Go to Google Account Settings
2. Security → 2-Step Verification (enable if not already)
3. App Passwords → Generate new app password
4. Copy the 16-character password to `EMAIL_PASS`

### 3. Database Initialization

Run the SQL script to create the users table:

```bash
# Option 1: Using MySQL client
mysql -h your-host -u your-user -p your-database < scripts/init-db.sql

# Option 2: Copy and paste the SQL from scripts/init-db.sql into your database GUI
```

### 4. Test Database Connection

```bash
node scripts/test-db-connection.js
```

You should see:
```
✅ Successfully connected to MySQL database!
✅ Users table exists
```

### 5. Start Backend Server

```bash
npm start
```

Server will run on `http://localhost:3000`

### 6. Deploy Backend to Render

1. Push code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. New → Web Service
4. Connect your repository
5. Configure:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Environment Variables**: Add all variables from `.env`
6. Deploy!

### 7. Frontend Configuration

Edit `frontend/assets/js/auth.js`:

```javascript
const API_BASE_URL = 'https://your-backend-url.onrender.com';
```

### 8. Deploy Frontend to Vercel

```bash
cd frontend
vercel --prod
```

Or use Vercel dashboard:
1. Import your GitHub repository
2. Set root directory to `frontend`
3. Deploy!

## 🔐 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/verify-otp` | Verify OTP |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/forgot-password` | Request password reset |
| POST | `/api/auth/reset-password` | Reset password with OTP |
| GET | `/api/auth/me` | Get current user (protected) |

### Roadmap APIs (unchanged)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/roadmaps` | Get all roadmaps |
| GET | `/api/roadmaps/:id` | Get roadmap by ID |
| GET | `/api/skills` | Get all skills |
| GET | `/api/skills/:id` | Get skill details |
| GET | `/api/projects` | Get all projects |
| GET | `/api/practices` | Get best practices |

## 📱 User Flow

1. **Signup** → `signup.html`
   - User enters name, email, phone, password
   - OTP sent to email
   - Redirect to verify-otp.html

2. **Verify OTP** → `verify-otp.html`
   - User enters 6-digit OTP
   - Account activated
   - Redirect to login.html

3. **Login** → `login.html`
   - User enters email/phone and password
   - JWT token stored in localStorage
   - Redirect to dashboard.html

4. **Dashboard** → `dashboard.html` (protected)
   - Shows user info from JWT
   - Links to roadmaps, projects, practices

5. **Forgot Password** → `forgot-password.html`
   - User enters email/phone
   - OTP sent to email
   - Redirect to reset-password.html

6. **Reset Password** → `reset-password.html`
   - User enters OTP and new password
   - Password updated
   - Redirect to login.html

## 🧪 Testing

### Test Signup Flow
1. Open `signup.html`
2. Fill in registration form
3. Check email for OTP
4. Verify OTP in `verify-otp.html`
5. Login in `login.html`

### Test Login
1. Open `login.html`
2. Enter email/phone and password
3. Should redirect to dashboard

### Test Password Reset
1. Click "Forgot Password" on login page
2. Enter email/phone
3. Check email for OTP
4. Enter OTP and new password
5. Login with new password

### Test Protected Routes
1. Try accessing `dashboard.html` without login
2. Should redirect to `login.html`

## 🔒 Security Features

- ✅ Passwords hashed with bcrypt (10 rounds)
- ✅ JWT tokens with 7-day expiry
- ✅ OTP expires after 10 minutes
- ✅ OTP cleared after use
- ✅ Email/phone uniqueness enforced
- ✅ Input validation on all endpoints
- ✅ CORS enabled for frontend
- ✅ Environment variables for secrets

## 🎨 Frontend Pages

- `signup.html` - User registration
- `login.html` - User login
- `verify-otp.html` - OTP verification
- `forgot-password.html` - Password reset request
- `reset-password.html` - Password reset with OTP
- `dashboard.html` - Protected user dashboard

## 📦 Dependencies

### Backend
- `express` - Web framework
- `mysql2` - MySQL client
- `bcrypt` - Password hashing
- `jsonwebtoken` - JWT tokens
- `nodemailer` - Email sending
- `dotenv` - Environment variables
- `cors` - CORS middleware

### Frontend
- Vanilla HTML, CSS, JavaScript
- No build process required

## 🐛 Troubleshooting

### Database Connection Fails
- Check `.env` file exists in `backend/` directory
- Verify database credentials are correct
- Ensure database is running and accessible
- Check firewall settings for cloud databases

### Email Not Sending
- Verify `EMAIL_USER` and `EMAIL_PASS` are correct
- For Gmail, ensure App Password is used (not regular password)
- Check spam folder for OTP emails
- Verify 2-Step Verification is enabled for Gmail

### JWT Token Invalid
- Check `JWT_SECRET` is set in `.env`
- Ensure token is being sent in `Authorization: Bearer <token>` header
- Token may be expired (7-day expiry)

### CORS Errors
- Verify `API_BASE_URL` in `frontend/assets/js/auth.js` matches your backend URL
- Check CORS is enabled in `backend/server/server.js`

## 📝 License

MIT License - See LICENSE file for details

## 👨‍💻 Author

Skill Development Roadmap Team
