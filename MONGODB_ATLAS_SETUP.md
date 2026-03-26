# MongoDB Atlas Setup Guide

## Step 1: Create a Free Cluster

1. **Login to MongoDB Atlas:** https://cloud.mongodb.com/

2. **Create a New Cluster:**
   - Click "Build a Cluster" or "Create Cluster"
   - Select "FREE" plan (M0 Sandbox)
   - Choose a cloud provider (AWS, Google Cloud, or Azure)
   - Select a region closest to you
   - Give your cluster a name (e.g., "contact-manager-cluster")
   - Click "Create Cluster"

3. **Wait for Cluster Creation:**
   - This takes 2-5 minutes
   - You'll see "Creating cluster..." status

## Step 2: Create Database User

1. **Go to "Database Access"** (left sidebar)
2. **Click "Add New Database User"**
3. **Fill in user details:**
   - Username: `contactuser` (or your choice)
   - Password: Create a strong password (save it!)
   - Database User Privileges: Keep default "Read and write to any database"
4. **Click "Add User"**

## Step 3: Configure Network Access

1. **Go to "Network Access"** (left sidebar)
2. **Click "Add IP Address"**
3. **Select "Allow Access from Anywhere"** (0.0.0.0/0)
   - This allows your application to connect from anywhere
4. **Click "Confirm"**

## Step 4: Get Connection String

1. **Go to "Clusters"** (left sidebar)
2. **Click "Connect"** for your cluster
3. **Select "Drivers"**
4. **Copy the connection string** - it will look like:
   ```
   mongodb+srv://contactuser:<password>@contact-manager-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Step 5: Update Your Application

1. **Replace `<password>`** in the connection string with your actual password

2. **Update your .env file:**
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://contactuser:YOUR_PASSWORD@contact-manager-cluster.xxxxx.mongodb.net/contactmanager?retryWrites=true&w=majority
   ```

## Step 6: Install Dependencies and Switch Backend

1. **Install Mongoose:**
   ```bash
   cd backend
   npm install mongoose
   ```

2. **Switch to MongoDB backend:**
   ```bash
   # Replace current server with MongoDB version
   cp server-mongodb.js server.js
   ```

## Step 7: Test Connection

1. **Start the backend server:**
   ```bash
   npm start
   ```

2. **Look for success message:**
   ```
   Server running on port 5000
   MongoDB connected successfully
   ```

## Step 8: Verify in Atlas Dashboard

1. **Go to "Collections"** in your Atlas cluster
2. **You should see:**
   - `contactmanager` database
   - `contacts` collection (after you add first contact)
   - Documents will appear as you add contacts

## Common Issues & Solutions

### Issue: "Authentication failed"
**Solution:** Double-check username and password in connection string

### Issue: "IP not whitelisted"
**Solution:** Add your IP to Network Access or use "Allow from anywhere"

### Issue: "Connection timeout"
**Solution:** Check cluster status, ensure it's created and running

### Issue: "Database not found"
**Solution:** The database will be created automatically when you first add data

## Atlas Dashboard Features

Once connected, you can:
- **Browse Collections:** View your contact data
- **Insert Documents:** Manually add test data
- **Query Data:** Use Atlas Query Builder
- **Monitor Performance:** See database metrics
- **Set Up Indexes:** Improve query performance

## Security Best Practices

1. **Use strong passwords** for database users
2. **Restrict IP access** in production (not 0.0.0.0/0)
3. **Enable SSL/TLS** (default in Atlas)
4. **Monitor cluster activity** in Atlas dashboard
5. **Use environment variables** for credentials

## Next Steps

After successful connection:
1. Test all CRUD operations in your app
2. Verify data appears in Atlas Collections
3. Explore Atlas features (indexes, aggregation, etc.)
4. Consider Atlas Search for advanced search features

## Need Help?

If you encounter issues:
- Check Atlas documentation: https://docs.atlas.mongodb.com/
- Verify cluster status is "Active"
- Check Network Access settings
- Ensure connection string is correct
