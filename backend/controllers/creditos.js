// Import your database model for Creditos (assuming you have a model defined)
const Credito = require('../routes/creditos');
const pool = require("../db");

// Get all creditos
const getCreditos = async (req, res) => {
    pool.query('SELECT * FROM \"Creditos\"', (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Error executing query', error.stack);
        } else {
            res.status(200).json(results.rows);
        }
    });
};

// Get a specific credito by ID
const getCreditoById = async (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id, 10); // Usa parseInt con la base 10

    if (isNaN(id)) {
        return res.status(400).send('Invalid user ID'); // Maneja casos en los que id no sea un número
    }

    pool.query('SELECT * FROM "Creditos" WHERE "ID_Cliente" = $1', [id], (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Error executing query', error.stack);
        } else {
            console.log(results.rows);
            res.status(200).json(results.rows[0]);
        }
    });
};


// Create a new credito 
const createCredito = async (req, res) => {
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
        'INSERT INTO "Creditos" VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [
            parseInt(userId),
            parseInt(userId),
            "Emprendedor",
            "EstadoTest",
            parseInt(montoPrestamo),
            parseFloat(10.00),
            "01-01-2001"
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

// Update an existing credito by ID
const updateCredito = async (req, res) => {
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
        ingresos
    } = req.body;

    pool.query(
        'INSERT INTO "Emprendedor" VALUES (1, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *',
        [
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
            ingresos
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

// Delete a credito by ID
const deleteCredito = async (req, res) => {
    try {
        const deleted = await Credito.destroy({
            where: { id: req.params.id }
        }); // Adjust as needed
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Credito not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCreditos,
    getCreditoById,
    createCredito,
    updateCredito,
    deleteCredito
};
