import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import Highlight from './components/Highlight';
import Calendar from './components/Calendar';
import Season10 from './components/Season10';
import News from './components/News';
import Login from './components/Login';
import Equipes from './components/Equipes';
import './css/styles.css';
import Footer from './components/Footer';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <div>
                <Header isLoggedIn={isLoggedIn} />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Banner />
                            <Content />
                            <Highlight />
                            <Calendar />
                            <Season10 />
                            <Footer />
                        </>
                    } />
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/equipes" element={<Equipes />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;