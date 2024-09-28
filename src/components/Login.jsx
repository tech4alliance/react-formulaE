import React, { useState, useEffect } from 'react';
import Slideshow from './Slideshow';
import { FaUser, FaLock, FaMoon, FaSun, FaSignOutAlt } from 'react-icons/fa';
import '../css/login.css';

const Login = ({ setIsLoggedIn }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedInState] = useState(false);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUsername(userData);
            setIsLoggedInState(true);
            setIsLoggedIn(true);
        }

        const savedTheme = localStorage.getItem('loginTheme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        }
    }, [setIsLoggedIn]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            localStorage.setItem('user', username);
            setIsLoggedInState(true);
            setIsLoggedIn(true);
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedInState(false);
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('loginTheme', !isDarkMode ? 'dark' : 'light');
    };

    return (
        <div className={`login-container ${isDarkMode ? 'darkmode' : ''}`}>
            <div className="login-box">
                <h2>Login</h2>
                <button onClick={toggleTheme} className="theme-toggle">
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
                {!isLoggedIn ? (
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <FaUser className="input-icon" />
                            <input 
                                type="text" 
                                placeholder="Nome de usuário" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="input-group">
                            <FaLock className="input-icon" />
                            <input 
                                type="password" 
                                placeholder="Senha" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Entrar</button>
                    </form>
                ) : (
                    <div className="welcome-message">
                        <p>Bem-vindo, {username}!</p>
                        <button onClick={handleLogout} className="logout-button">
                            <FaSignOutAlt /> Sair
                        </button>
                    </div>
                )}
            </div>
            <Slideshow />
        </div>
    );
};

export default Login;