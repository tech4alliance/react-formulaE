import React from 'react';

const Banner = () => { // Math 
    const eventDate = new Date('2024-12-01'); 
    const today = new Date();
    const diffInTime = eventDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

    return (
        <section className="banner">
            <div className="banner-content">
                <div className="race-info">
                    <div className="track-image">
                        <img src="./src/public/img/track.png" alt="Track Image" />
                    </div>
                    <div className="event-details">
                        <div className="round-info">
                            <div className="flag">
                                <img src="./src/public/img/china-flag.png" alt="China Flag" />
                            </div>
                            <div className="round-text">ROUND 11</div>
                        </div>
                        <div className="next-event">EM SEGUIDA:</div>
                        <div className="event-name">2024 PORTLAND E-PRIX</div>
                        <p><strong>{diffInDays}</strong> dias faltando para a corrida.</p>
                    </div>
                </div>
                <div className="leaderboard">
                    <p>1 - <span>António Félix DA COSTA</span> <img src="./src/public/img/portugal-flag.png" alt="Portugal Flag" /></p>
                    <p>2 - <span>Nick CASSIDY</span> <img src="./src/public/img/new-zealand-flag.png" alt="New Zealand Flag" /></p>
                    <p>3 - <span>Oliver ROWLAND</span> <img src="./src/public/img/uk-flag.png" alt="UK Flag" /></p>
                    <p>4 - <span>Jake DENNIS</span> <img src="./src/public/img/uk-flag.png" alt="UK Flag" /></p>
                    <p>5 - <span>Mitch EVANS</span> <img src="./src/public/img/new-zealand-flag.png" alt="New Zealand Flag" /></p>
                    <button>CLASSIFICAÇÃO COMPLETA</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
