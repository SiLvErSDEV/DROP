// src/components/FourthScreen.js
import React from 'react';
import './FourthScreen.css'; // Import the CSS file for the fourth screen

function FourthScreen() {
    return (
        <div className="fourth-screen">
            <h1>¿Por qué DROP?</h1>
            <div className="bottom-rectangle">
                <div className="top-half">
                    <div className="color-section color-1">
                        <div className="circle">1</div>
                        <div className="color-text">
                            <span>Rápido</span>
                        </div>
                    </div>
                    <div className="color-section color-2">
                        <div className="circle">2</div>
                        <div className="color-text">
                            <span>Fácil</span>
                        </div>
                    </div>
                    <div className="color-section color-3">
                        <div className="circle">3</div>
                        <div className="color-text">
                            <span>Somos tu</span>
                            <span>aliado</span>
                        </div>
                    </div>
                </div>
                <div className="bottom-half">
                    <div className="bottom-text">Desembolsos en 48 horas</div>
                    <div className="bottom-text">Sin papeleos</div>
                    <div className="bottom-text">Crédito a tu medida</div>
                </div>
            </div>
        </div>
    );
}

export default FourthScreen;
