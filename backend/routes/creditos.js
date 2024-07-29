const express = require('express');
const router = express.Router();

// Import controller functions for Creditos
const {
    getCreditos,
    getCreditoById,
    createCredito,
    updateCredito,
    deleteCredito,
} = require('../controllers/creditos');

// Define routes for Creditos
router.get('/', getCreditos);           // Get all creditos
router.get('/:id', getCreditoById);     // Get a specific credito by ID
router.post('/', createCredito);        // Create a new credito
router.put('/:id', updateCredito);      // Update an existing credito by ID
router.delete('/:id', deleteCredito);   // Delete a credito by ID

module.exports = router;
