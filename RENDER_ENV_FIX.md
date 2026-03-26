# Render Environment Variables Fix

## Problem
Render is not reading environment variables from `render.yaml`. The `MONGODB_URI` is still undefined.

## Solution: Manual Environment Variables Setup

### Step 1: Go to Render Dashboard
1. Visit https://dashboard.render.com
2. Click on your service: `inglu-contact-manager`

### Step 2: Find Environment Variables Section
Look for any of these tabs/sections:
- **"Settings"** tab → Scroll down to "Environment Variables"
- **"Environment"** tab
- **"Configuration"** section
- **"Variables"** section

### Step 3: Add Environment Variables
Click **"Add Environment Variable"** and add these three:

1. **MONGODB_URI**
   ```
   mongodb+srv://Navjindersingh:abc1234@cluster-1.naznay1.mongodb.net/contactmanager?retryWrites=true&w=majority
   ```

2. **NODE_ENV**
   ```
   production
   ```

3. **PORT**
   ```
   10000
   ```

### Step 4: Save and Redeploy
1. Click **"Save Changes"** or **"Apply"**
2. Trigger **"Manual Deploy"** to restart with new variables

### Alternative: Check Service Configuration
If you can't find environment variables section:
1. Go to your service settings
2. Look for **"Build & Deploy"** settings
3. Check if there's an **"Environment"** or **"Variables"** subsection

### What Should Happen After Fix
- Deployment logs should show: `MONGODB_URI: Set`
- MongoDB should connect successfully
- Application should load properly

### If Still Not Working
1. **Contact Render support** - they can help locate environment variables section
2. **Try recreating service** - sometimes helps with configuration issues
3. **Check service type** - ensure it's "Web Service" not "Static Site"

The `render.yaml` file approach might not work with your Render plan. Manual environment variable setup is more reliable.
