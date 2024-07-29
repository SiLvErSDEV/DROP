import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstMainPage.css';
import logo from "../img/DROP LOGO vf-ai.png";

const FirstMainPage = ({ isAuthenticated, setMontoPrestamo, setFrecuenciaPago, setPlazoPrestamo }) => {
    const [monto, setMonto] = useState('');
    const [plazo, setPlazo] = useState('');
    const [frecuencia, setFrecuencia] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error
    const [alertMessage, setAlertMessage] = useState(''); // Estado para el mensaje de alerta

    const navigate = useNavigate();

    const handleMontoChange = (e) => {
        const value = e.target.value;
        setMonto(value);
        setMontoPrestamo(value); // Actualiza el estado del componente padre

        // Validar el monto
        if (value > 5000) {
            setErrorMessage('El valor debe ser menor a 5000');
        } else {
            setErrorMessage('');
        }
    };

    const handlePlazoChange = (e) => {
        const value = e.target.value;
        setPlazo(value);
        setPlazoPrestamo(value); // Actualiza el estado del componente padre
    };

    const handleFrecuenciaChange = (e) => {
        const value = e.target.value;
        setFrecuencia(value);
        setFrecuenciaPago(value); // Actualiza el estado del componente padre
    };

    const handleSimulationClick = () => {
        if (!monto || !plazo || !frecuencia) {
            setAlertMessage('Por favor llenar todos los campos');
            return;
        }

        if (isAuthenticated) {
            navigate('/register-loan');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="main-content">
            <div className="left-half">
                <img src={logo} alt="Logo" className="main-logo"/>
                <div className="logo-text">Crédito a tu medida</div>
            </div>
            <div className="right-half">
                <div className="rectangle-group">
                    <div className="rounded-rectangle">
                        <div className="rectangle-item">
                            <span>Monto del crédito</span>
                            <input
                                type="number"
                                value={monto}
                                onChange={handleMontoChange}
                                min="0"
                                max="5000"
                            />
                            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Mostrar mensaje de error */}
                        </div>
                        <div className="rectangle-item">
                            <span>¿En cuántos meses quieres pagar?</span>
                            <select
                                value={plazo}
                                onChange={handlePlazoChange}
                                className="select-field"
                            >
                                <option value="">Seleccionar</option> {/* Valor vacío por defecto */}
                                <option value="3">3 meses</option>
                                <option value="4">4 meses</option>
                                <option value="5">5 meses</option>
                                <option value="6">6 meses</option>
                            </select>
                        </div>
                        <div className="rectangle-item">
                            <span>Frecuencia de Pago</span>
                            <select
                                value={frecuencia}
                                onChange={handleFrecuenciaChange}
                                className="select-field"
                            >
                                <option value="">Seleccionar</option> {/* Valor vacío por defecto */}
                                <option value="semanal">semanal</option>
                                <option value="quincenal">quincenal</option>
                                <option value="mensual">mensual</option>
                            </select>
                        </div>
                    </div>
                    {alertMessage && <div className="alert-message">{alertMessage}</div>} {/* Mostrar mensaje de alerta */}
                    <div className="small-rectangle" onClick={handleSimulationClick}>Simula tu préstamo</div>
                    <div className="third-rectangle">Solicite una asesoría</div>
                </div>
            </div>
        </div>
    );
};

export default FirstMainPage;
