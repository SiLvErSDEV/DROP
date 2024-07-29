// my-app-backend/controllers/users.js
const pool = require('../db');

const getEmprendedor = (req, res) => {
    pool.query('SELECT * FROM \"Emprendedor\"', (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Error executing query', error.stack);
        } else {
            res.status(200).json(results.rows);
        }
    });
};

const getEmprendedorById = (req, res) => {
    alert("TEST");
};

const createEmprendedor = (req, res) => {
    const {
        modalidadVivienda,
        rentaMensual,
        comparteVivienda,
        dependientes,
        mudanzaReciente,
        provinciaVivienda,
        distritoVivienda,
        historialCrediticio,
        numeroPostPago,
        productoCrediticio,
        productoVigente,
        bancoCredito,
        nombreNegocio,
        rucNegocio,
        rubroNegocio,
        usoCredito,
        ingresos,
        userId,
        montoPrestamo,
        plazoPrestamo,
        frecuenciaPago
    } = req.body;
    var isTrueMudanza = (mudanzaReciente === 'true');
    var isTrueComparte = (comparteVivienda === 'true');
    var isTruePostpago = (numeroPostPago === 'true');
    var isTrueTieneProd = (productoCrediticio === 'true');
    pool.query(
        'INSERT INTO "Emprendedor" VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *',
        [
            parseInt(userId),
            parseInt(userId),
            modalidadVivienda,
            parseFloat(rentaMensual),
            isTrueComparte,
            parseInt(dependientes),
            isTrueMudanza,
            provinciaVivienda,
            distritoVivienda,
            historialCrediticio,
            isTruePostpago,
            isTrueTieneProd,
            productoVigente,
            bancoCredito,
            nombreNegocio,
            rucNegocio,
            rubroNegocio,
            usoCredito,
            parseFloat(ingresos)
        ],
        (error, results) => {
            if (error) {
                res.status(500).send('Server error');
                console.error('Error executing query', error.stack);
            } else {
                res.status(201).json(results.rows[0]);
            }
        }
    );
};

const updateEmprendedor = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    pool.query(
        'UPDATE \"Usuarios\" SET name = $1, email = $2 WHERE id = $3 RETURNING *',
        [name, email, id],
        (error, results) => {
            if (error) {
                res.status(500).send('Server error');
                console.error('Error executing query', error.stack);
            } else {
                res.status(200).json(results.rows[0]);
            }
        }
    );
};

const deleteEmprendedor = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM \"Usuarios\" WHERE id = $1', [id], (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Error executing query', error.stack);
        } else {
            res.status(200).send(`User deleted with ID: ${id}`);
        }
    });
};

module.exports = {
    getEmprendedor,
    getEmprendedorById,
    createEmprendedor,
    updateEmprendedor,
    deleteEmprendedor,
};
