// frontend/src/pages/MainPage.js
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css'; // Import the CSS file for the main page
import logo from '../img/DROP LOGO vf-ai.png'; // Import the main logo
import capturaLogo from '../img/Capture.PNG';
import SimpleScreen from '../components/SimpleScreen';
import FourthScreen from '../components/FourthScreen';

function MainPage() {
    const whoWeAreRef = useRef(null);
    const whyDropRef = useRef(null);
    const navigate = useNavigate();

    const handleScrollToWhoWeAre = () => {
        if (whoWeAreRef.current) {
            whoWeAreRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToWhyDrop = () => {
        if (whyDropRef.current) {
            whyDropRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigateToRegisterLoan = () => {
        navigate('/solicitar-préstamo');
    };

    return (
        <div>
            <div className="main-content">
                <div className="left-half">
                    <img src={logo} alt="Logo" className="main-logo" />
                    <div className="logo-text">Crédito a tu medida</div>
                </div>
                <div className="right-half">
                    <div className="rectangle-group">
                        <div className="rounded-rectangle">
                            <div className="rectangle-item">
                                <span>Monto del crédito</span>
                                <input type="text" />
                            </div>
                            <div className="rectangle-item">
                                <span>¿En cuántos meses quieres pagar?</span>
                                <input type="text" />
                            </div>
                            <div className="rectangle-item">
                                <span>Frecuencia de Pago</span>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="small-rectangle" onClick={handleNavigateToRegisterLoan}>Simula tu préstamo</div>
                        <div className="third-rectangle">Solicite una asesoría</div>
                    </div>
                </div>
            </div>
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
            <div ref={whoWeAreRef}>
                <SimpleScreen />
            </div>
            <div ref={whyDropRef}>
                <FourthScreen />
            </div>
        </div>
    );
}

export default MainPage;
