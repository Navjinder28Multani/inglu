const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Test API route
app.get('/api/contacts', (req, res) => {
  res.json([
    {id: 1, name: 'Test Contact', email: 'test@test.com', phone: '1234567890', address: 'Test Address'}
  ]);
});

app.post('/api/contacts', (req, res) => {
  res.json({id: Date.now(), ...req.body});
});

app.put('/api/contacts/:id', (req, res) => {
  res.json({id: req.params.id, ...req.body});
});

app.delete('/api/contacts/:id', (req, res) => {
  res.json({message: 'Contact deleted'});
});

// Serve React app
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(PORT, () => console.log('Server running on port', PORT));
