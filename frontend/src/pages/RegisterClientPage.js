import React, { useState } from 'react';

const RegisterClientPage = () => {
    const [formData, setFormData] = useState({
        Id_Cliente: '',
        Id_Usuario: '',
        Nombre_Completo: '',
        Fecha_de_Nacimiento: '',
        DNI: '',
        Numero_Telefono: "",
        Correo_Electronico: "",
        Nivel_Educativo: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(formData);
            if (response.ok) {
                console.log('Client registered successfully!');
                // Optionally, redirect or display success message
            } else {
                console.error('Failed to register Client:', response.statusText);
                // Handle error, display error message, etc.
            }
        } catch (error) {
            console.error('Error registering Client:', error);
            // Handle network error, display error message, etc.
        }
    };

    return (
        <div>
            <h2>Register Client</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Id Cliente:
                    <input type="text" name="Id_Cliente" value={formData.Id_Cliente} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Id Usuario:
                    <input type="text" name="Id_Usuario" value={formData.Id_Usuario} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Nombre Completo:
                    <input type="text" name="Nombre_Completo" value={formData.Nombre_Completo} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Apellidos:
                    <input type="text" name="Apellidos" value={formData.Apellidos} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Fecha de Nacimiento:
                    <input type="text" name="Fecha_de_Nacimiento" value={formData.Fecha_de_Nacimiento}
                           onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    DNI:
                    <input type="text" name="DNI" value={formData.DNI} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Número de teléfono:
                    <input type="text" name="Numero_Telefono" value={formData.Numero_Telefono} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Correo Electronico:
                    <input type="text" name="Correo_Electronico" value={formData.Correo_Electronico} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Nivel educativo:
                    <input type="text" name="Nivel_Educativo" value={formData.Nivel_Educativo} onChange={handleChange}/>
                </label>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterClientPage;
