// src/components/SimpleScreen.js
import React from 'react';
import './SimpleScreen.css'; // Import the CSS file
import exampleImage from '../img/DERECHA.PNG'; // Import the image

function SimpleScreen() {
    return (
        <div className="simple-screen">
            <div className="simple-screen-left">
                <h1>¿Quiénes somos?</h1>
                <p>Somos una fintech peruana.</p>
                <p>Financiamos a emprendedores y personas naturales; fácil y rápido</p>

                <h1>Nuestro Propósito</h1>
                <p>Es darte un crédito a tu medida y ser tu aliado financiero</p>
            </div>
            <div className="simple-screen-right">
                <img src={exampleImage} alt="Example" className="right-image" />
            </div>
        </div>
    );
}

export default SimpleScreen;
