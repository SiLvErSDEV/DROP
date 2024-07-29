// my-app-backend/controllers/clients.js
const pool = require('../db');

const getClients = (req, res) => {
    pool.query('SELECT * FROM \"Clientes\"', (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Error executing query', error.stack);
        } else {
            res.status(200).json(results.rows);
        }
    });
};

const getClientById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM \"Clientes\" WHERE id = $1', [id], (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Error executing query', error.stack);
        } else {
            res.status(200).json(results.rows);
        }
    });
};

const createClient = (req, res) => {
    const { Nombres, Apellidos, Tipo_Documento, Numero_Documento, Telefono, Correo, Contraseña } = req.body;
    Id_Cliente = 30;
    Id_Usuario = Id_Cliente;
    var isActive = ('false' === 'true');
    pool.query('INSERT INTO \"Clientes\" VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [Id_Cliente, Id_Usuario, Nombres+" "+Apellidos, "01/01/2001", Numero_Documento, '', Correo, '', isActive], (error, results) =>{
        if (error) {
            res.status(500).send('Server error');
            console.error('Error executing query', error.stack);
        } else {
            res.status(201).json(results.rows[0]);
        }
    });
};

const updateClient = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    pool.query(
        'UPDATE \"Clientes\" SET name = $1, email = $2 WHERE id = $3 RETURNING *',
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

const deleteClient = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM \"Clientes\" WHERE id = $1', [id], (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Error executing query', error.stack);
        } else {
            res.status(200).send(`Client deleted with ID: ${id}`);
        }
    });
};

module.exports = {
    getClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient,
};
