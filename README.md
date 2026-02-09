# Skill Development Roadmap

A role-based learning path and project ideas platform.

## Deployment Guide

### 1. Backend (Render)
1.  Push this repository to **GitHub**.
2.  Go to [Render Dashboard](https://dashboard.render.com/).
3.  Click **New +** -> **Web Service**.
4.  Connect your GitHub repository.
5.  **Settings**:
    *   **Root Directory**: `backend`
    *   **Runtime**: Node
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server/server.js`
6.  Click **Create Web Service**.
7.  **IMPORTANT**: Copy the URL Render gives you (e.g., `https://your-app.onrender.com`).

### 2. Frontend (Vercel)
1.  Go to [Vercel Dashboard](https://vercel.com).
2.  Click **Add New...** -> **Project**.
3.  Import the same GitHub repository.
4.  **Framework Preset**: Other (or plain HTML/Static).
5.  **Root Directory**: Click "Edit" and select `frontend`.
6.  Click **Deploy**.

### 3. Connect Frontend to Backend
1.  In your local code, open `frontend/assets/js/config.js`.
2.  Update `API_BASE_URL` with your **Render Backend URL**:
    ```javascript
    const API_BASE_URL = "https://your-app-name.onrender.com";
    ```
3.  Commit and push the change to GitHub. Vercel will auto-redeploy.

## Local Development
1.  **Backend**:
    ```bash
    cd backend
    npm install
    npm start
    ```
2.  **Frontend**:
    Open `frontend/index.html` in your browser. (No server needed, or use Live Server).
