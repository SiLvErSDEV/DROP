import React, { useEffect, useState } from 'react';
import './Profile.css';
import logo from '../img/Izquierda.PNG';
import contratoPDF from '../pdf/Proceso End 2 End Drop.pdf'; // Asegúrate de que el archivo esté en la ubicación correcta

const Profile = ({ userId }) => {
    const [loanInfo, setLoanInfo] = useState({
        Id_Cliente: '',
        Id_Credito: '',
        Tipo: '',
        Estado: '',
        Valor: '',
        Tasa: '',
        Fecha_de_Asignacion: ''
    });

    useEffect(() => {
        // Función para obtener la información del préstamo desde el backend
        const fetchLoanInfo = async () => {
            try {
                if (userId) { // Verifica que userId esté definido
                    console.log(userId);
                    const response = await fetch(`http://localhost:5000/creditos/${userId}`); // Usa template literals para URL
                    const data = await response.json();
                    setLoanInfo({
                        monto: data.Valor,
                        tea: data.Tasa,
                        plazo: "3 meses"
                    });
                }
            } catch (error) {
                console.error('Error al obtener la información del préstamo:', error);
            }
        };

        fetchLoanInfo();
    }, [userId]);

    return (
        <div className="profile-page">
            <div className="decorative-image">
                <img src={logo} alt="Decorative" />
            </div>
            <div className="profile-content">
                <div className="profile-header">
                    <span>Mis créditos</span>
                    <span>Beneficios</span>
                </div>
                <h2>Bienvenido, Andrés</h2>
                <div className="profile-links">
                    <span className="left-link">Tus créditos</span>
                    <a className="right-link" href={contratoPDF} download>Tu contrato</a>
                </div>
                <div className="loan-info">
                    <p>Monto: {loanInfo.monto} TEA: {loanInfo.tea} Plazo: {loanInfo.plazo}</p>
                    <p>Cuotas pagadas: 0 Cuotas restantes: 1</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
