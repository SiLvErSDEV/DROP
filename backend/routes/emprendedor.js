// my-app-backend/routes/users.js
const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser, getEmprendedor, getEmprendedorById, createEmprendedor, updateEmprendedor, deleteEmprendedor,
} = require('../controllers/emprendedor');

router.get('/', getEmprendedor);
router.get('/:id', getEmprendedorById);
router.post('/', createEmprendedor);
router.put('/:id', updateEmprendedor);
router.delete('/:id', deleteEmprendedor);

module.exports = router;
