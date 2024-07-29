import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import UsuariosCRUD from './UsuariosCRUD';
import ClientesCRUD from './ClientesCRUD'; // Asegúrate de crear este componente
import CreditosCRUD from './CreditosCRUD'; // Asegúrate de crear este componente
import EmprendedorCRUD from './EmprendedorCRUD'; // Asegúrate de crear este componente

const DashboardPage = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const renderCRUDComponent = () => {
        switch (selectedOption) {
            case 'Usuarios':
                return <UsuariosCRUD />;
            case 'Clientes':
                return <ClientesCRUD />;
            case 'Creditos':
                return <CreditosCRUD />;
            case 'Emprendedor':
                return <EmprendedorCRUD />;
            default:
                return null;
        }
    };

    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <div className="dashboard-picklist-container">
                <label htmlFor="dashboard-picklist">Selecciona una opción:</label>
                <select
                    id="dashboard-picklist"
                    className="dashboard-picklist"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value="">--Selecciona--</option>
                    <option value="Usuarios">Usuarios</option>
                    <option value="Clientes">Clientes</option>
                    <option value="Creditos">Creditos</option>
                    <option value="Emprendedor">Emprendedor</option>
                </select>
            </div>
            {renderCRUDComponent()}
        </div>
    );
};

export default DashboardPage;
