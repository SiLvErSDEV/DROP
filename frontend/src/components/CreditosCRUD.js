import React, { useState, useEffect } from 'react';
import CRUDTable from './CRUDTable';

const CreditosCRUD = () => {
    const [data, setData] = useState([]);
    const [newItem, setNewItem] = useState({});
    const [editingItem, setEditingItem] = useState(null);
    const [editValue, setEditValue] = useState('');

    const columns = [
        { header: 'ID_Cliente', field: 'ID_Cliente' },
        { header: 'ID_Credito', field: 'ID_Credito' },
        { header: 'Tipo', field: 'Tipo' },
        { header: 'Estado', field: 'Estado' },
        { header: 'Valor', field: 'Valor' },
        { header: 'Tasa', field: 'Tasa' },
        { header: 'Fecha_de_Asignacion', field: 'Fecha_de_Asignacion' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/creditos');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAdd = async () => {
        // Add credito logic
    };

    const handleEdit = async (id) => {
        // Edit credito logic
    };

    const handleDelete = async (id) => {
        // Delete credito logic
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

export default CreditosCRUD;
