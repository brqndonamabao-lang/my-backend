const express = require('express'); // Import Express
const app = express();              // Create an Express app
const PORT = process.env.PORT || 3000; // Set the server port

// Middleware to parse JSON request bodies
app.use(express.json());

// Route: Home
app.get('/', (req, res) => {
  res.send('Welcome to My Updated Backend Server!');
});

// Route: API Example
app.get('/api/user', (req, res) => {
  res.json({ name: "John Doe", email: "john@example.com" });
});

// Route: Contact API
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  res.json({
    message: `Thank you ${name}, we received your message!`,
    data: { name, email, message }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});