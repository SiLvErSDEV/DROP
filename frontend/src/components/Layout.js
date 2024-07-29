import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // You may want to add specific styles for the layout

const Layout = ({ children }) => {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/clients" className="nav-link">Inicio</Link></li>
                    <li className="nav-item"><Link to="#" onClick={() => window.scrollTo(0, document.getElementById('who-we-are').offsetTop)} className="nav-link">¿Quiénes somos?</Link></li>
                    <li className="nav-item"><Link to="#" onClick={() => window.scrollTo(0, document.getElementById('why-drop').offsetTop)} className="nav-link">¿Por qué Drop?</Link></li>
                    <li className="nav-item"><Link to="/register-client" className="nav-link">Regístrate</Link></li>
                    <li className="nav-item"><Link to="/login" className="nav-link">Iniciar Sesión</Link></li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
