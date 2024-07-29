import React, { useState, useEffect } from 'react';
import CRUDTable from './CRUDTable';

const EmprendedorCRUD = () => {
    const [data, setData] = useState([]);
    const [newItem, setNewItem] = useState({});
    const [editingItem, setEditingItem] = useState(null);
    const [editValue, setEditValue] = useState('');

    const columns = [
        { header: 'ID_Cliente', field: 'ID_Cliente' },
        { header: 'Modalidad de vivienda', field: 'Modalidad_de_vivienda' },
        { header: 'Renta Mensual', field: 'Renta_Mensual' },
        { header: 'Comparte Vivienda', field: 'Comparte_Vivienda' },
        { header: 'Personas Dependientes', field: 'Personas_Dependientes' },
        { header: 'Mudanza', field: 'Mudanza' },
        { header: 'Provincia', field: 'Provincia' },
        { header: 'Distrito', field: 'Distrito' },
        { header: 'Historial Crediticio Opinion', field: 'Historias_Crediticio_Opinion' },
        { header: 'Postpago', field: 'Postpago' },
        { header: 'Tiene Producto Vigente', field: 'Tiene_Producto_Crediticio' },
        { header: 'Banco', field: 'Banco' },
        { header: 'Nombre Negocio', field: 'Nombre_Negocio' },
        { header: 'RUC Negocio', field: 'RUC_Negocio' },
        { header: 'Rubro Negocio', field: 'Rubro_Negocio' },
        { header: 'Motivo Credito', field: 'Motivo_Credito' },
        { header: 'Ingresos', field: 'Ingresos' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/emprendedor');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAdd = async () => {
        // Add emprendedor logic
    };

    const handleEdit = async (id) => {
        // Edit emprendedor logic
    };

    const handleDelete = async (id) => {
        // Delete emprendedor logic
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

export default EmprendedorCRUD;
