const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Test API routes
app.get('/api/contacts', (req, res) => {
  res.json([]);
});

app.post('/api/contacts', (req, res) => {
  res.json({id: Date.now(), ...req.body});
});

app.put('/api/contacts/:id', (req, res) => {
  res.json({id: req.params.id, ...req.body});
});

app.delete('/api/contacts/:id', (req, res) => {
  res.json({message: 'deleted'});
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(PORT, () => console.log('Server running on port', PORT));
