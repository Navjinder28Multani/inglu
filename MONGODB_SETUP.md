# MongoDB Installation Guide for Windows

## Step 1: Download MongoDB Community Server

1. **Visit the official MongoDB download page:**
   https://www.mongodb.com/try/download/community

2. **Select the following options:**
   - Version: Select the latest stable version
   - Platform: Windows
   - Package: msi (Windows Installer)

3. **Click Download** and save the installer file.

## Step 2: Install MongoDB

1. **Run the downloaded .msi installer** as Administrator

2. **Choose "Complete" setup type** (recommended)

3. **Install MongoDB as a Windows service** (checked by default)

4. **Install MongoDB Compass** (optional GUI tool)

5. **Complete the installation**

## Step 3: Start MongoDB Service

### Option A: Using Windows Services
1. Open **Services** (press Win + R, type `services.msc`)
2. Find **MongoDB Server** in the list
3. Right-click and select **Start**

### Option B: Using Command Line
```cmd
net start MongoDB
```

### Option C: Manual Start
```cmd
"C:\Program Files\MongoDB\Server\X.X\bin\mongod.exe" --dbpath="C:\Program Files\MongoDB\Server\X.X\data"
```
*(Replace X.X with your MongoDB version)*

## Step 4: Verify Installation

1. **Check if MongoDB is running:**
```cmd
net start | findstr MongoDB
```

2. **Test MongoDB connection:**
```cmd
"C:\Program Files\MongoDB\Server\X.X\bin\mongo.exe"
```

## Step 5: Add MongoDB to PATH (Optional)

1. **Right-click "This PC" → Properties → Advanced system settings**
2. **Click "Environment Variables"**
3. **Under "System variables", find "Path" and click "Edit"**
4. **Click "New" and add:**
```
C:\Program Files\MongoDB\Server\X.X\bin
```
*(Replace X.X with your MongoDB version)*

## Step 6: Common Issues & Solutions

### Issue: "MongoDB service not found"
**Solution:** 
- Ensure you installed MongoDB as a Windows service
- Re-run installer and select "Install MongoDB as a Windows service"

### Issue: "Port 27017 already in use"
**Solution:**
- Check what's using the port: `netstat -ano | findstr 27017`
- Kill the process: `taskkill /PID <PID> /F`
- Or change port in MongoDB configuration

### Issue: "Access denied"
**Solution:**
- Run Command Prompt as Administrator
- Check Windows service permissions

## Step 7: Test with Our Application

Once MongoDB is installed and running:

1. **Stop current servers** (if running)
2. **Update backend code to use MongoDB**
3. **Restart the backend server**
4. **Test the application**

## MongoDB Default Configuration

- **Default Port:** 27017
- **Data Directory:** `C:\Program Files\MongoDB\Server\X.X\data\`
- **Log Directory:** `C:\Program Files\MongoDB\Server\X.X\log\`
- **Config File:** `C:\Program Files\MongoDB\Server\X.X\bin\mongod.cfg`

## Alternative: MongoDB Atlas (Cloud)

If local installation fails, you can use MongoDB Atlas (free cloud option):

1. **Sign up:** https://www.mongodb.com/cloud/atlas/register
2. **Create free cluster**
3. **Get connection string**
4. **Update .env file with Atlas connection string**

## Next Steps After Installation

After MongoDB is installed and running:
1. I'll restore the original MongoDB backend code
2. Update the .env file with correct MongoDB URI
3. Test the connection
4. Verify all CRUD operations work

## Need Help?

If you encounter any issues:
- Check MongoDB documentation: https://docs.mongodb.com/manual/installation/
- Verify Windows services are running
- Ensure firewall allows port 27017
- Check antivirus isn't blocking MongoDB
