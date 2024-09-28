import React from 'react';

const Content = () => {
    return (
        <section className="content">
            <div className="exclusive-content">
                <h2>CONTEÚDO EXCLUSIVO</h2>
                <p>Descubra os bastidores da Fórmula E com entrevistas exclusivas, análises técnicas detalhadas e insights dos pilotos. Explore a tecnologia inovadora dos carros elétricos e os avanços sustentáveis que estão revolucionando o automobilismo. Acompanhe de perto as estratégias das equipes e as emoções das corridas em circuitos urbanos ao redor do mundo.</p>
                <div className="main-image">
                    <img src="./src/public/img/imagem1.webp" alt="Main Image" />
                </div>
            </div>
            <div className="news-grid">
                {[
                        {
                        title: "Piloto brasileiro Lucas Ferreira vence ePrix de São Paulo, tornando-se o primeiro brasileiro a ganhar na Fórmula E.",
                        img: "./src/public/img/imagem2.webp"
                    },
                    {
                        title: "Fórmula E anuncia corrida noturna inédita em Dubai, prometendo espetáculo visual com carros iluminados por luzes LED.",
                        img: "./src/public/img/imagem3.webp"
                    },
                    {
                        title: "Equipes da Fórmula E introduzem novas baterias e regeneração de energia, reduzindo assim, o impacto ambiental.",
                        img: "./src/public/img/imagem4.webp"
                    },
                    {
                        title: "Fórmula E & Tech Alliance criam apps interativos com realidade aumentada para experiências imersivas durante as corridas.",
                        img: "./src/public/img/imagem5.webp"
                    }
                ].map((news, index) => (
                    <div className="news-item" key={index}>
                        <p className="news-title">NEWS</p>
                        <p>{news.title}</p>
                        <img src={news.img} alt={`News Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Content;
