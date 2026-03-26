# Render Deployment Guide

## Current Issue
Your application is deployed on Render but may not be working properly because:
1. Frontend and backend are trying to run as separate services
2. API calls may be pointing to wrong URLs
3. Environment variables may not be configured correctly

## Fixing the Deployment

### Option 1: Combined Single Service (Recommended)

#### Step 1: Create a unified server
Create a new file `backend/server-unified.js`:

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
// Contact Schema and routes here...

// Serve React frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### Step 2: Update package.json
Add build script to backend package.json:
```json
{
  "scripts": {
    "build": "cd ../frontend && npm run build",
    "start": "node server-unified.js"
  }
}
```

#### Step 3: Update frontend API calls
Change all API calls from `http://localhost:5000` to just `/api`

### Option 2: Separate Services (Current Setup)

#### Frontend Configuration
Update `frontend/package.json`:
```json
{
  "homepage": ".",
  "proxy": "https://inglu-sswy.onrender.com"
}
```

#### Backend Configuration
Ensure backend is configured correctly for Render:
- Port should be `10000` (Render's default)
- MongoDB URI should be set in environment variables

## Environment Variables for Render

### Backend Service Environment Variables:
1. **MONGODB_URI**: `mongodb+srv://Navjindersingh:abc1234@cluster-1.naznay1.mongodb.net/contactmanager?retryWrites=true&w=majority`
2. **PORT**: `10000`

### Frontend Environment Variables:
1. **REACT_APP_API_URL**: `https://inglu-sswy.onrender.com`

## Testing Your Deployment

1. **Check Backend**: Visit `https://inglu-sswy.onrender.com/api/contacts`
2. **Check Frontend**: Visit `https://inglu-sswy.onrender.com`
3. **Test CRUD Operations**: Try adding/editing/deleting contacts

## Common Issues and Solutions

### Issue: "Cannot GET /api/contacts"
**Solution**: Ensure backend routes are properly configured and frontend build is serving correctly.

### Issue: CORS Errors
**Solution**: Ensure CORS is properly configured in backend.

### Issue: MongoDB Connection Failed
**Solution**: 
- Check environment variables in Render dashboard
- Ensure MongoDB Atlas IP whitelist includes Render's IP ranges

### Issue: Frontend Not Loading
**Solution**: 
- Check build process completed successfully
- Ensure static files are being served correctly

## Quick Fix Steps

1. Go to your Render dashboard
2. Check environment variables for both services
3. Redeploy the services
4. Check the logs for any errors
5. Test the API endpoints directly

## Recommended Approach

For simplicity, I recommend using **Option 1** (Combined Single Service) as it's easier to manage and deploy.

Would you like me to implement the unified server approach?
