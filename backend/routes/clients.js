// my-app-backend/routes/clients.js
const express = require('express');
const router = express.Router();
const {
    getClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient,
} = require('../controllers/clients');

router.get('/', getClients);
router.get('/:id', getClientById);
router.post('/', createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

module.exports = router;
