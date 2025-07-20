const express = require('express');
const serverless = require('serverless-http');

// Import storage and routes
const { MemStorage } = require('../../server/storage.js');
const storage = new MemStorage();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Contact form route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const contact = await storage.createContact({ name, email, message });
    res.json({ message: 'Message sent successfully!', contact });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

// Get all contacts route
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await storage.getAllContacts();
    res.json(contacts);
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ message: 'Failed to get contacts' });
  }
});

// Export the serverless function
module.exports.handler = serverless(app);