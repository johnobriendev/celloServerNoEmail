const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');
const { authenticateJWT } = require('../middleware/auth');

// Get all lists within a specific board
router.get('/:boardId/lists', authenticateJWT, listController.getLists);

// Create a new list within a board
router.post('/:boardId/lists', authenticateJWT, listController.createList);

// Update a specific list
router.put('/lists/:id', authenticateJWT, listController.updateList);

// Delete a specific list
router.delete('/lists/:id', authenticateJWT, listController.deleteList);

module.exports = router;