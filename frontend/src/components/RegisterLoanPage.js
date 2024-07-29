import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterLoanPage.css';

const RegisterLoanPage = ({ userId, montoPrestamo, plazoPrestamo, frecuenciaPago }) => {
    const [formData, setFormData] = useState({
        modalidadVivienda: '',
        rentaMensual: '',
        comparteVivienda: '',
        dependientes: '',
        mudanzaReciente: '',
        provinciaVivienda: '',
        distritoVivienda: '',
        historialCrediticio: '',
        numeroPostPago: '',
        productoCrediticio: '',
        productoVigente: '',
        bancoCredito: '',
        nombreNegocio: '',
        rucNegocio: '',
        rubroNegocio: '',
        usoCredito: '',
        ingresos: '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loanData = {
            ...formData,
            userId,
            montoPrestamo,
            plazoPrestamo,
            frecuenciaPago
        };

        console.log(loanData);

        try {
            const response = await fetch('http://localhost:5000/creditos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loanData),
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Crédito creado correctamente");
                const response2 = await fetch('http://localhost:5000/emprendedor/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loanData),
                });
                if (response2.ok) {
                    console.log("Emprendedor creado correctamente");
                    navigate('/success');
                } else {
                    console.log("Error al crear el emprendedor");
                }
            } else {
                console.log('Error al crear el crédito');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al solicitar préstamo');
        }
    };

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <div className="register-loan-page">
            <div className="left-half">
                <div className="title">Cuéntanos sobre ti</div>
                <div className="subtitle">Para evaluarte necesitamos la siguiente información:</div>
                <form className="loan-form" onSubmit={handleSubmit}>
                    {currentStep === 1 && (
                        <>
                            <label>
                                Modalidad de vivienda
                                <input
                                    type="text"
                                    name="modalidadVivienda"
                                    value={formData.modalidadVivienda}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿Cuál es tu renta mensual?
                                <input
                                    type="text"
                                    name="rentaMensual"
                                    value={formData.rentaMensual}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿Compartes vivienda con alguien?
                                <input
                                    type="text"
                                    name="comparteVivienda"
                                    value={formData.comparteVivienda}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿Cuántas personas son dependientes de ti?
                                <input
                                    type="text"
                                    name="dependientes"
                                    value={formData.dependientes}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿Te mudaste en el último año?
                                <input
                                    type="text"
                                    name="mudanzaReciente"
                                    value={formData.mudanzaReciente}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿En qué provincia queda tu vivienda?
                                <input
                                    type="text"
                                    name="provinciaVivienda"
                                    value={formData.provinciaVivienda}
                                    onChange={handleChange}
                                />
                            </label>
                            <button type="button" onClick={handleNextStep} className="next-button">Siguiente</button>
                        </>
                    )}
                    {currentStep === 2 && (
                        <>
                            <label>
                                ¿En qué distrito queda tu vivienda?
                                <input
                                    type="text"
                                    name="distritoVivienda"
                                    value={formData.distritoVivienda}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿Cómo consideras tu historial crediticio?
                                <input
                                    type="text"
                                    name="historialCrediticio"
                                    value={formData.historialCrediticio}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿Tu número es post pago?
                                <input
                                    type="text"
                                    name="numeroPostPago"
                                    value={formData.numeroPostPago}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿Tienes algún producto crediticio?
                                <input
                                    type="text"
                                    name="productoCrediticio"
                                    value={formData.productoCrediticio}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿Qué producto crediticio tienes vigente?
                                <input
                                    type="text"
                                    name="productoVigente"
                                    value={formData.productoVigente}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿Qué banco utilizarías para recibir tu crédito?
                                <input
                                    type="text"
                                    name="bancoCredito"
                                    value={formData.bancoCredito}
                                    onChange={handleChange}
                                />
                            </label>
                            <button type="button" onClick={handlePreviousStep} className="previous-button">Anterior</button>
                            <button type="button" onClick={handleNextStep} className="next-button">Siguiente</button>
                        </>
                    )}
                    {currentStep === 3 && (
                        <>
                            <label>
                                Nombre del negocio
                                <input
                                    type="text"
                                    name="nombreNegocio"
                                    value={formData.nombreNegocio}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                RUC del negocio
                                <input
                                    type="text"
                                    name="rucNegocio"
                                    value={formData.rucNegocio}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Rubro del negocio
                                <input
                                    type="text"
                                    name="rubroNegocio"
                                    value={formData.rubroNegocio}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿Para qué usarías el crédito?
                                <input
                                    type="text"
                                    name="usoCredito"
                                    value={formData.usoCredito}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ¿Cuáles son tus ingresos?
                                <input
                                    type="text"
                                    name="ingresos"
                                    value={formData.ingresos}
                                    onChange={handleChange}
                                />
                            </label>
                            <button type="button" onClick={handlePreviousStep} className="previous-button">Anterior</button>
                            <button type="submit" className="submit-button">Solicitar Préstamo</button>
                        </>
                    )}
                </form>
            </div>
            <div className="right-half">
                <div className="file-upload-section">
                    <div className="file-upload-title">Subir Documentos</div>
                    <div className="file-upload-subtitle">Sube tus documentos necesarios para el préstamo</div>
                    <button className="file-upload-button">
                        <span>Seleccionar Archivo</span>
                        <input type="file" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterLoanPage;
