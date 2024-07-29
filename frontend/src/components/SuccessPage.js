import React from 'react';
import './SuccessPage.css';
import izquierdaImg from '../img/Izquierda.PNG'; // Importa la imagen

const SuccessPage = () => {
    return (
        <div className="success-page">
            <div className="left-container">
                <img src={izquierdaImg} alt="Imagen izquierda" className="left-image" /> {/* Usa la imagen */}
            </div>
            <div className="right-container">
                <h1 className="main-title">¡Tu solicitud<br />se registró con éxito!</h1>
                <p className="subtitle">¡Hola, Andres! Hemos enviado a tu correo todo el detalle de la solicitud.</p>
            </div>
        </div>
    );
};

export default SuccessPage;
