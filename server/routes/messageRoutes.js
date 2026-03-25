const express = require('express');
const router = express.Router();

// Import message controller (Assuming you have a controller to handle the logic)
const messageController = require('../controllers/messageController');

// Route to get all messages
router.get('/messages', messageController.getAllMessages);

// Route to get a single message by ID
router.get('/messages/:id', messageController.getMessageById);

// Route to create a new message
router.post('/messages', messageController.createMessage);

// Route to update a message by ID
router.put('/messages/:id', messageController.updateMessage);

// Route to delete a message by ID
router.delete('/messages/:id', messageController.deleteMessage);

module.exports = router;