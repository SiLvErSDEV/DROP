// frontend/src/components/ClientsTable.js
import React from 'react';
import './ClientsTable.css'; // Import CSS file

const ClientsTable = ({ clients, onDelete, onEdit }) => {
    return (
        <table className="clients-table">
            <thead>
            <tr>
                <th>ID Cliente</th>
                <th>ID Usuario</th>
                <th>Nombre</th>
                <th>Fecha de Nacimiento</th>
                <th>DNI</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Nivel Educativo</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {clients.map(client => (
                <tr key={client.Id_Cliente}>
                    <td>{client.Id_Cliente}</td>
                    <td>{client.Id_Usuario}</td>
                    <td>{client.Nombre_Completo}</td>
                    <td>{client.Fecha_de_Nacimiento}</td>
                    <td>{client.DNI}</td>
                    <td>{client.Numero_Telefono}</td>
                    <td>{client.Correo_Electronico}</td>
                    <td>{client.Nivel_Educativo}</td>
                    <td>
                        <button onClick={() => onEdit(client.Id_Cliente)}>Edit</button>
                        <button onClick={() => onDelete(client.Id_Cliente)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ClientsTable;
