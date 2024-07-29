// my-app-backend/controllers/users.js
const pool = require('../db');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM \"Usuarios\"', (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Error executing query', error.stack);
        } else {
            res.status(200).json(results.rows);
        }
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM \"Usuarios\" WHERE id = $1', [id], (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Error executing query', error.stack);
        } else {
            res.status(200).json(results.rows);
        }
    });


};

const createUser = (req, res) => {
    const { Nombres, Apellidos, Tipo_Documento, Numero_Documento, Telefono, Correo, Contraseña } = req.body;
    const Id_Usuario = 30;
    const Id_Cliente = Id_Usuario;
    pool.query('INSERT INTO \"Usuarios\" VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [Id_Usuario, Nombres, Apellidos, Correo, Contraseña, "Usuario"], (error, results) => {
        if (error) {
            res.status(500).send('Server error');
            console.error('Error executing query', error.stack);
        } else {
            res.status(201).json(results.rows[0]);
        }
    });



};

const updateUser = (req, res) => {
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

const deleteUser = (req, res) => {
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
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
