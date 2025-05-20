const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());  // Middleware to parse JSON request bodies

const PORT = 3000;

// POST endpoint to handle chat messages
app.post('/chat', async (req, res) => {
  const message = req.body.message;  // Extract message from JSON body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });  // Validate input
  }

  try {
    // Simulated chatbot response: echo message in uppercase
    const reply = message.toUpperCase();

    // Respond with JSON
    res.json({ reply });
  } catch (error) {
    // Catch errors and respond with 500 status
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server and listen on port 3000
app.listen(PORT, () => {
  console.log(`Chatbot API listening at http://localhost:${PORT}`);
});
