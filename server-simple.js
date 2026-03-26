const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB - hardcoded for speed
mongoose.connect('mongodb+srv://Navjindersingh:abc1234@cluster-1.naznay1.mongodb.net/contactmanager?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String
});

const Contact = mongoose.model('Contact', contactSchema);

// API Routes
app.get('/api/contacts', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

app.post('/api/contacts', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
});

app.put('/api/contacts/:id', async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.json(contact);
});

app.delete('/api/contacts/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({message: 'deleted'});
});

// Serve React app
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(PORT, () => console.log('Server running on port', PORT));
