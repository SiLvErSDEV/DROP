// frontend/src/pages/RegisterLoanPage.js
import React from 'react';
import '../components/RegisterLoanPage.css'; // Import the CSS file for the registration form page

function RegisterLoanPage() {
    return (
        <div className="register-loan-page">
            <h1>Solicitar Préstamo</h1>
            <form className="register-loan-form">
                <div className="form-group">
                    <label htmlFor="loanAmount">Monto del Préstamo:</label>
                    <input type="text" id="loanAmount" name="loanAmount" />
                </div>
                <div className="form-group">
                    <label htmlFor="loanTerm">Plazo del Préstamo (en meses):</label>
                    <input type="text" id="loanTerm" name="loanTerm" />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentFrequency">Frecuencia de Pago:</label>
                    <input type="text" id="paymentFrequency" name="paymentFrequency" />
                </div>
                <button type="submit">Solicitar</button>
            </form>
        </div>
    );
}

export default RegisterLoanPage;