const pool = require('../db'); // Asegúrate de tener configurada tu conexión a la base de datos

exports.login = async (req, res) => {
    const { Usuario, Contraseña } = req.body;

    try {
        const result = await pool.query('SELECT * FROM \"Usuarios\" WHERE \"Usuario\" = $1', [Usuario]);

        if (result.rows.length === 0) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const user = result.rows[0];

        // Aquí se puede agregar un método de hashing para verificar la contraseña si está hasheada
        if (user.Contraseña !== Contraseña) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }



        return res.status(200).json({ message: user.Id_Usuario, tipo: user.Tipo });
    } catch (error) {
        console.error('Error al verificar el login:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};
