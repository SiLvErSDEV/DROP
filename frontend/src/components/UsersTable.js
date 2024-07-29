// frontend/src/components/UsersTable.js
import React from 'react';
import './UsersTable.css'; // Import CSS file

const UsersTable = ({ users, onDelete, onEdit }) => {
    return (
        <table className="users-table">
            <thead>
            <tr>
                <th>Id Usuario</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Usuario</th>
                <th>Contraseña</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.Id_Usuario}>
                    <td>{user.Id_Usuario}</td>
                    <td>{user.Nombres}</td>
                    <td>{user.Apellidos}</td>
                    <td>{user.Usuario}</td>
                    <td>{user.Contraseña}</td>
                    <td>
                        <button onClick={() => onEdit(user.Id_Usuario)}>Edit</button>
                        <button onClick={() => onDelete(user.Id_Usuario)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
