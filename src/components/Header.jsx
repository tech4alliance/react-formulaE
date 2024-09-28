import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const eventDate = new Date('2024-12-01'); 
    const today = new Date();
    const diffInTime = eventDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24)); 

    return (
        <header>
            <div className="top-bar">
                <a href="/">
                <img src="./src/public/img/logo.png" alt="Formula E Logo" className="logo" />
                </a>
                <nav>
                    <ul>
                        <li><Link to="/login">LOGIN</Link></li>
                        <li><Link to="/news">NOTÍCIAS</Link></li>
                        <li><Link to="https://www.fiaformulae.com/en/teams/fa97d2e7-02ca-4983-a930-4fdaa245a852/mahindra-racing">CORRIDAS</Link></li>
                        <li><Link to="/equipes">RESULTADOS E CLASSIFICAÇÃO</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="event-announcement">
                <div className="event-info">
                    <div className="arrow">^</div>
                    <div className="separator">|</div>
                    <div className="event-text">
                        <p className="event-title">2024 SHANGAI E-PRIX</p>
                        <p className="event-time">{diffInDays} dias restantes</p>
                    </div>
                </div>
                <div className="event-buttons">
                <a href="https://www.mahindraracing.com/">
                    <button>INGRESSOS</button>
                    </a>
                <a href="https://www.mahindraracing.com/">
                    <button>ONDE VER</button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
