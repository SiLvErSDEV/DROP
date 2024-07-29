import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClientsPage from './pages/ClientsPage';
import UsersPage from './pages/UsersPage';
import RegisterUserPage from './pages/RegisterUserPage';
import RegisterClientPage from './pages/RegisterClientPage';
import RegisterLoanPage from './components/RegisterLoanPage';
import LoginPage from './components/LoginPage';
import SuccessPage from './components/SuccessPage';
import DashboardPage from './components/DashboardPage'; // Importa la nueva página del dashboard
import Profile from './components/Profile'; // Importa el nuevo componente Profile
import './App.css';
import logo from './img/DROP LOGO vf-ai.png';
import SimpleScreen from "./components/SimpleScreen";
import FourthScreen from "./components/FourthScreen";
import SecondMainPage from './components/SecondMainPage';
import FirstMainPage from "./components/FirstMainPage";
import FifthScreen from "./components/FifthScreen";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userType, setUserType] = useState(null); // Nuevo estado para el tipo de usuario
    const whoWeAreRef = useRef(null);
    const whyDropRef = useRef(null);
    const Inicio = useRef(null);
    const [montoPrestamo, setMontoPrestamo] = useState(null);
    const [plazoPrestamo, setPlazoPrestamo] = useState(null);
    const [frecuenciaPago, setFrecuenciaPago] = useState(null);

    const handleScrollToWhoWeAre = () => {
        if (whoWeAreRef.current) {
            whoWeAreRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToInicio = () => {
        if (Inicio.current) {
            Inicio.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToWhyDrop = () => {
        if (whyDropRef.current) {
            whyDropRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUserId(null);
        setUserType(null); // Limpiar el tipo de usuario al cerrar sesión
    };

    return (
        <Router>
            <div>
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/" onClick={handleScrollToInicio} className="nav-link">Inicio</Link></li>
                        {userType === 'admin' && (
                            <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboards</Link></li>
                        )}
                        <li className="nav-item"><Link to="#" onClick={handleScrollToWhoWeAre} className="nav-link">¿Quiénes somos?</Link></li>
                        <li className="nav-item"><Link to="#" onClick={handleScrollToWhyDrop} className="nav-link">¿Por qué Drop?</Link></li>
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item"><Link to="/profile" className="nav-link">Perfil</Link></li>
                                <li className="nav-item"><Link to="/" onClick={handleLogout} className="nav-link">Cerrar Sesión</Link></li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item"><Link to="/register-user" className="nav-link">Regístrate</Link></li>
                                <li className="nav-item"><Link to="/login" className="nav-link">Iniciar Sesión</Link></li>
                            </>
                        )}
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<FirstMainPage isAuthenticated={isAuthenticated} setMontoPrestamo={setMontoPrestamo} setFrecuenciaPago={setFrecuenciaPago} setPlazoPrestamo={setPlazoPrestamo}/>} />
                    <Route path="/clients" element={<ClientsPage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/register-user" element={<RegisterUserPage />} />
                    <Route path="/register-client" element={<RegisterClientPage />} />
                    <Route path="/register-loan" element={<RegisterLoanPage userId={userId} montoPrestamo={montoPrestamo} frecuenciaPago={frecuenciaPago} plazoPrestamo={plazoPrestamo}/>} />
                    <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} setUserId={setUserId} setUserType={setUserType} />} />
                    <Route path="/success" element={<SuccessPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} /> {/* Nueva ruta para el dashboard */}
                    <Route path="/profile" element={<Profile userId={userId} />} /> {/* Nueva ruta para el perfil */}
                </Routes>

                <SecondMainPage />
                <div ref={whoWeAreRef}>
                    <SimpleScreen />
                </div>
                <div ref={whyDropRef}>
                    <FourthScreen />
                </div>
                <FifthScreen />
            </div>
        </Router>
    );
}

export default App;
