const mongoose = require('mongoose');
require('dotenv').config();

async function testConnection() {
  try {
    console.log('Testing MongoDB Atlas connection...');
    console.log('URI:', process.env.MONGODB_URI.replace(/:([^@]+)@/, ':***@'));
    
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    });
    
    console.log('✅ Connection successful!');
    
    // Test creating a simple document
    const TestSchema = new mongoose.Schema({
      test: String,
      timestamp: { type: Date, default: Date.now }
    });
    
    const TestModel = mongoose.model('Test', TestSchema);
    
    const testDoc = new TestModel({ test: 'Connection test' });
    await testDoc.save();
    
    console.log('✅ Document creation successful!');
    
    // Clean up
    await TestModel.deleteMany({});
    console.log('✅ Cleanup completed');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    process.exit(1);
  }
}

testConnection();
