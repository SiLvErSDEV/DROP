import React from 'react';
import capturaLogo from '../img/Capture.PNG'; // Ensure the path is correct
import './SecondMainPage.css'; // Import specific CSS for this component

const SecondMainPage = () => {
    return (
        <div className="second-mainpage">
            <h1>Créditos Drop</h1>
            <div className="rectangle-container">
                <div className="rounded-rectangle-left">
                    <div className="rectangle-title">Crédito Emprendedor</div>
                    <img src={capturaLogo} alt="Captura" className="captura-logo" />
                    <div className="rectangle-content">
                        Financiamiento de capital de trabajo para pequeños emprendedores
                    </div>
                </div>
                <div className="rounded-rectangle-right">
                    <div className="rectangle-title">Requisitos</div>
                    <div className="rectangle-content">
                        <ul>
                            <li>Negocio con 2 años de funcionamiento</li>
                            <li>Últimos 3 meses de tus Estados de Cuenta</li>
                            <li>Foto de tu DNI vigente</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondMainPage;
