import React from 'react';
import './FifthScreen.css'; // Import the CSS file for styling
import dropLogo from '../img/DropLogo.PNG'; // Import the image

const FifthScreen = () => {
    return (
        <div className="fifth-screen">
            <div className="left-half">
                <div className="fifth-screen-rectangle fifth-screen-rectangle-blue">
                    <div className="fifth-screen-rectangle-title">Contacto</div>
                </div>
                <div className="fifth-screen-rectangle fifth-screen-rectangle-light">
                    <div className="fifth-screen-rectangle-content">
                        <div className="fifth-screen-rectangle-heading">Phone</div>
                        <div className="fifth-screen-rectangle-info">999999999</div>
                    </div>
                </div>
                <div className="fifth-screen-rectangle fifth-screen-rectangle-light">
                    <div className="fifth-screen-rectangle-content">
                        <div className="fifth-screen-rectangle-heading">Email</div>
                        <div className="fifth-screen-rectangle-info">dropfintech24@gmail.com</div>
                    </div>
                </div>
                <div className="fifth-screen-rectangle fifth-screen-rectangle-blue">
                    <div className="fifth-screen-rectangle-title">Social</div>
                </div>
            </div>
            <div className="right-half-fifth">
                <img src={dropLogo} alt="Drop Logo" className="drop-logo"/>
            </div>
        </div>
    );
};

export default FifthScreen;
