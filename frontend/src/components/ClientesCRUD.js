import React, { useState, useEffect } from 'react';
import CRUDTable from './CRUDTable';

const ClientesCRUD = () => {
    const [data, setData] = useState([]);
    const [newItem, setNewItem] = useState({});
    const [editingItem, setEditingItem] = useState(null);
    const [editValue, setEditValue] = useState('');

    const columns = [
        { header: 'Id_Cliente', field: 'Id_Cliente' },
        { header: 'Id_Usuario', field: 'Id_Usuario' },
        { header: 'Nombre Completo', field: 'Nombre_Completo' },
        { header: 'Fecha de Nacimiento', field: 'Fecha_de_Nacimiento' },
        { header: 'DNI', field: 'DNI' },
        { header: 'Numero de Telefono', field: 'Numero_Telefono' },
        { header: 'Correo Electronico', field: 'Correo_Electronico' },
        { header: 'Nivel Educativo', field: 'Nivel_Educativo' },
        { header: 'Activo', field: 'Activo' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/clients');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAdd = async () => {
        // Add client logic
    };

    const handleEdit = async (id) => {
        // Edit client logic
    };

    const handleDelete = async (id) => {
        // Delete client logic
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prev => ({ ...prev, [name]: value }));
    };

    return (
        <CRUDTable
            data={data}
            columns={columns}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onInputChange={handleInputChange}
            newItem={newItem}
            editingItem={editingItem}
            editValue={editValue}
        />
    );
};

export default ClientesCRUD;
