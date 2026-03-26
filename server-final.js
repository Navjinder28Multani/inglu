const express = require('express');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());

// Simple HTML response for testing
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Contact Manager</title></head>
      <body>
        <h1>Contact Manager API</h1>
        <p>Server is running on port ${PORT}</p>
        <p>API Endpoints:</p>
        <ul>
          <li>GET /api/contacts</li>
          <li>POST /api/contacts</li>
          <li>PUT /api/contacts/:id</li>
          <li>DELETE /api/contacts/:id</li>
        </ul>
      </body>
    </html>
  `);
});

// API routes
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

app.listen(PORT, () => console.log('Server running on port', PORT));
