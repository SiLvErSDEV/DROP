import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from '../img/DROP LOGO vf-ai.png';

const LoginPage = ({ setIsAuthenticated, setUserId, setUserType }) => {
    const [formData, setFormData] = useState({
        Usuario: '',
        Contraseña: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setIsAuthenticated(true);
                setUserId(result.message);
                setUserType(result.tipo); // Establece el tipo de usuario
                navigate('/'); // Redirige a la página principal
            } else {
                setErrorMessage('Datos incorrectos, por favor intentalo denuevo');
                console.error('Error de login:', result.message);
            }
        } catch (error) {
            setErrorMessage('Error al intentar iniciar sesión. Inténtelo de nuevo.');
            console.error('Error al intentar iniciar sesión:', error);
        }
    };

    return (
        <div className="login-page">
            <div className="login-left-half">
                <img src={logo} alt="Logo" className="login-main-logo"/>
                <div className="login-logo-text">Crédito a tu medida</div>
            </div>
            <div className="login-right-half">
                <div className="login-user-container">
                    <h2>Iniciar Sesión</h2>
                    {errorMessage && <div className="login-error-message">{errorMessage}</div>}
                    <form className="login-user-form" onSubmit={handleSubmit}>
                        <label>
                            Usuario:
                            <input type="text" name="Usuario" value={formData.Usuario} onChange={handleChange} />
                        </label>
                        <label>
                            Contraseña:
                            <input type="password" name="Contraseña" value={formData.Contraseña} onChange={handleChange} />
                        </label>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
