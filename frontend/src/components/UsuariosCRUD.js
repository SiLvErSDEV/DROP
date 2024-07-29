import React, { useState, useEffect } from 'react';
import CRUDTable from './CRUDTable';

const UsuariosCRUD = () => {
    const [data, setData] = useState([]);
    const [newItem, setNewItem] = useState({});
    const [editingItem, setEditingItem] = useState(null);
    const [editValue, setEditValue] = useState('');

    const columns = [
        { header: 'Id_Usuario', field: 'Id_Usuario' },
        { header: 'Nombres', field: 'Nombres' },
        { header: 'Apellidos', field: 'Apellidos' },
        { header: 'Usuario', field: 'Usuario' },
        { header: 'Contraseña', field: 'Contraseña' },
        { header: 'Tipo', field: 'Tipo' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/users');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAdd = async () => {
        // Add user logic
    };

    const handleEdit = async (id) => {
        // Edit user logic
    };

    const handleDelete = async (id) => {
        // Delete user logic
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

export default UsuariosCRUD;
