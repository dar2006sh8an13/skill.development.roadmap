# 🚀 Deployment Guide - Authentication System

## Quick Start Checklist

- [ ] MySQL database created
- [ ] Database credentials obtained
- [ ] Email service configured
- [ ] Backend `.env` file created
- [ ] Users table created in database
- [ ] Backend dependencies installed
- [ ] Backend deployed to Render
- [ ] Frontend API URL updated
- [ ] Frontend deployed to Vercel
- [ ] Test complete authentication flow

---

## Step 1: Create MySQL Database

### Option A: PlanetScale (Recommended)

1. Go to [planetscale.com](https://planetscale.com)
2. Sign up / Login
3. Click "Create database"
4. Name: `roadmap-auth`
5. Region: Choose closest to you
6. Click "Create database"
7. Go to "Connect" → "Create password"
8. Copy connection details:
   - `DB_HOST`: e.g., `aws.connect.psdb.cloud`
   - `DB_USER`: your username
   - `DB_PASSWORD`: generated password
   - `DB_NAME`: `roadmap-auth`

### Option B: Railway

1. Go to [railway.app](https://railway.app)
2. Sign up / Login
3. New Project → Provision MySQL
4. Click on MySQL → Connect
5. Copy connection details

### Option C: Aiven

1. Go to [aiven.io](https://aiven.io)
2. Sign up / Login
3. Create Service → MySQL
4. Copy connection details from service overview

---

## Step 2: Configure Email Service

### Option A: Gmail (Easiest for Testing)

1. Go to [Google Account](https://myaccount.google.com/)
2. Security → 2-Step Verification → Enable
3. Security → App Passwords
4. Select app: "Mail", device: "Other (Custom name)"
5. Enter name: "Roadmap Auth"
6. Click "Generate"
7. Copy the 16-character password

Your credentials:
- `EMAIL_USER`: your-email@gmail.com
- `EMAIL_PASS`: 16-character app password (no spaces)

### Option B: SendGrid (Production)

1. Go to [sendgrid.com](https://sendgrid.com)
2. Sign up / Login
3. Settings → API Keys → Create API Key
4. Copy the API key

Your credentials:
- `EMAIL_USER`: apikey
- `EMAIL_PASS`: your-sendgrid-api-key

---

## Step 3: Backend Setup

### 3.1 Create .env File

```bash
cd backend
cp .env.example .env
```

### 3.2 Edit .env File

Open `backend/.env` and fill in:

```env
PORT=3000
NODE_ENV=production

# MySQL Database (from Step 1)
DB_HOST=your-database-host.com
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name

# JWT Secret (generate new one)
JWT_SECRET=your-super-secret-jwt-key-change-this

# Email (from Step 2)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@yourdomain.com
EMAIL_FROM_NAME=Skill Development Roadmap

# OTP Settings
OTP_EXPIRY_MINUTES=10
```

**Generate JWT Secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3.3 Install Dependencies

```bash
npm install
```

### 3.4 Create Users Table

**Option 1: Using MySQL CLI**
```bash
mysql -h your-host -u your-user -p your-database < scripts/init-db.sql
```

**Option 2: Using Database GUI**
1. Open your database GUI (PlanetScale dashboard, phpMyAdmin, etc.)
2. Copy contents of `backend/scripts/init-db.sql`
3. Paste and execute

**Option 3: Using Node Script**
```bash
# Create a quick script
node -e "
const mysql = require('mysql2/promise');
require('dotenv').config();
const fs = require('fs');

(async () => {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  
  const sql = fs.readFileSync('scripts/init-db.sql', 'utf8');
  await conn.execute(sql);
  console.log('✅ Users table created!');
  await conn.end();
})();
"
```

### 3.5 Test Database Connection

```bash
node scripts/test-db-connection.js
```

Expected output:
```
✅ Successfully connected to MySQL database!
✅ Users table exists
```

### 3.6 Test Locally

```bash
npm start
```

Visit: `http://localhost:3000` - should see "API is running"

---

## Step 4: Deploy Backend to Render

### 4.1 Push to GitHub

```bash
git add .
git commit -m "Add authentication system"
git push origin main
```

### 4.2 Create Render Service

1. Go to [render.com](https://render.com)
2. Sign up / Login
3. New → Web Service
4. Connect your GitHub repository
5. Configure:
   - **Name**: `roadmap-backend`
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### 4.3 Add Environment Variables

In Render dashboard, go to Environment tab and add:

```
PORT=3000
NODE_ENV=production
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
JWT_SECRET=your-jwt-secret
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@yourdomain.com
EMAIL_FROM_NAME=Skill Development Roadmap
OTP_EXPIRY_MINUTES=10
```

### 4.4 Deploy

Click "Create Web Service" and wait for deployment.

Your backend URL will be: `https://roadmap-backend.onrender.com`

### 4.5 Test Backend

Visit: `https://your-backend-url.onrender.com`

Should see: "API is running"

Test endpoint: `https://your-backend-url.onrender.com/api/roadmaps`

---

## Step 5: Frontend Setup

### 5.1 Update API URL

Edit `frontend/assets/js/auth.js`:

```javascript
const API_BASE_URL = 'https://your-backend-url.onrender.com';
```

Replace with your actual Render backend URL.

### 5.2 Test Locally (Optional)

```bash
cd frontend
# Use any local server, e.g.:
python -m http.server 8000
# or
npx serve
```

Visit: `http://localhost:8000`

---

## Step 6: Deploy Frontend to Vercel

### Option A: Vercel CLI

```bash
cd frontend
npm install -g vercel
vercel --prod
```

### Option B: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up / Login
3. New Project → Import Git Repository
4. Select your repository
5. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `frontend`
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
6. Click "Deploy"

Your frontend URL will be: `https://your-project.vercel.app`

---

## Step 7: Test Complete Flow

### 7.1 Test Signup

1. Go to `https://your-frontend-url.vercel.app/signup.html`
2. Fill in registration form
3. Check email for OTP
4. Verify OTP
5. Should redirect to login

### 7.2 Test Login

1. Go to `https://your-frontend-url.vercel.app/login.html`
2. Enter email and password
3. Should redirect to dashboard
4. Dashboard should show your name

### 7.3 Test Password Reset

1. Click "Forgot Password" on login page
2. Enter email
3. Check email for OTP
4. Enter OTP and new password
5. Login with new password

### 7.4 Test Protected Routes

1. Logout from dashboard
2. Try accessing `dashboard.html` directly
3. Should redirect to login

### 7.5 Test Existing APIs

1. Visit `https://your-backend-url.onrender.com/api/roadmaps`
2. Should return roadmaps JSON
3. All existing features should work

---

## 🎉 Deployment Complete!

Your authentication system is now live!

**Frontend**: `https://your-project.vercel.app`
**Backend**: `https://your-backend.onrender.com`

---

## 🐛 Common Issues

### Issue: "Database connection failed"
**Solution**: 
- Check environment variables in Render
- Verify database is running
- Check firewall settings

### Issue: "Email not sending"
**Solution**:
- Verify EMAIL_USER and EMAIL_PASS
- Check spam folder
- For Gmail, ensure App Password is used

### Issue: "CORS error"
**Solution**:
- Verify API_BASE_URL in frontend matches backend URL
- Check CORS is enabled in backend

### Issue: "Token invalid"
**Solution**:
- Check JWT_SECRET is set
- Token may be expired (7-day expiry)
- Clear localStorage and login again

---

## 📊 Monitoring

### Render Logs
- Go to Render dashboard
- Click on your service
- View "Logs" tab

### Database Monitoring
- Check your database provider dashboard
- Monitor connection count
- Check query performance

---

## 🔄 Updates

To update your deployment:

```bash
# Make changes
git add .
git commit -m "Update message"
git push origin main
```

Render will auto-deploy backend.
Vercel will auto-deploy frontend.

---

## 🆘 Support

If you encounter issues:
1. Check Render logs
2. Check browser console
3. Verify environment variables
4. Test database connection
5. Check email service status

---

**Happy Coding! 🚀**
