import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './RegisterUserPage.css'; // Importa el CSS específico para este componente
import logo from "../img/DROP LOGO vf-ai.png"; // Importa el logo

const RegisterUserPage = () => {
    const [formData, setFormData] = useState({
        Nombres: '',
        Apellidos: '',
        Tipo_Documento: '',
        Numero_Documento: '',
        Telefono: '',
        Correo: '',
        Contraseña: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Inicializa el hook useNavigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verifica si todos los campos están llenos
        if (Object.values(formData).some(value => value.trim() === '')) {
            setErrorMessage('Por favor completar todos los campos');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('User registered successfully!');
                const response2 = await fetch('http://localhost:5000/clients', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                console.log(response2);

                // Redirige a la página principal después de un registro exitoso
                navigate('/'); // Redirige a la página de inicio
            } else {
                console.error('Failed to register user:', response.statusText);
                // Manejar error, mostrar mensaje de error, etc.
            }
        } catch (error) {
            console.error('Error registering user:', error);
            // Manejar error de red, mostrar mensaje de error, etc.
        }
    };

    return (
        <div className="register-page">
            <div className="register-left-half">
                <img src={logo} alt="Logo" className="register-main-logo"/>
                <div className="register-logo-text">Crédito a tu medida</div>
            </div>
            <div className="register-right-half">
                <div className="register-user-container">
                    <h2>Completa tus datos</h2>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <form className="register-user-form" onSubmit={handleSubmit}>
                        <label>
                            Nombres:
                            <input type="text" name="Nombres" value={formData.Nombres} onChange={handleChange} />
                        </label>
                        <label>
                            Apellidos:
                            <input type="text" name="Apellidos" value={formData.Apellidos} onChange={handleChange} />
                        </label>
                        <label>
                            Tipo Documento:
                            <select name="Tipo_Documento" value={formData.Tipo_Documento} onChange={handleChange}>
                                <option value="">Selecciona un tipo</option>
                                <option value="RUC">RUC</option>
                                <option value="DNI">DNI</option>
                            </select>
                        </label>
                        <label>
                            Numero de Documento:
                            <input type="text" name="Numero_Documento" value={formData.Numero_Documento} onChange={handleChange} />
                        </label>
                        <label>
                            Teléfono:
                            <input type="text" name="Telefono" value={formData.Telefono} onChange={handleChange} />
                        </label>
                        <label>
                            Correo Electrónico:
                            <input type="email" name="Correo" value={formData.Correo} onChange={handleChange} />
                        </label>
                        <label>
                            Contraseña:
                            <input type="password" name="Contraseña" value={formData.Contraseña} onChange={handleChange} />
                        </label>
                        <div></div> {/* Espacio vacío */}
                        <button type="submit">Regístrate</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterUserPage;
