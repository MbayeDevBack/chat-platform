// userRoutes.js

const express = require('express');
const router = express.Router();

// Sample user management routes

// GET all users
router.get('/users', (req, res) => {
    res.send('Fetch all users');
});

// GET a specific user by ID
router.get('/users/:id', (req, res) => {
    res.send(`Fetch user with ID: ${req.params.id}`);
});

// POST create a new user
router.post('/users', (req, res) => {
    res.send('Create a new user');
});

// PUT update an existing user
router.put('/users/:id', (req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
});

// DELETE a user
router.delete('/users/:id', (req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
});

module.exports = router;