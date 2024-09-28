import React from 'react';
import '../css/highlight.css';

const FormulaEPromo = () => {
  return (
    <div className="promo-container">
      <div className="promo-content">
        <h1 className="promo-title">A FÓRMULA E COMO<br />NUNCA ANTES VISTA</h1>
        <p className="promo-description">
          EXPERIENCIE A NOVA FORMA DE ASSISTIR AS CORRIDAS EM 360 GRAUS, OFERECENDO UMA IMERSÃO COMPLETA NA AÇÃO DA PISTA. VIVENCIE CADA CURVA E ULTRAPASSAGEM COMO SE ESTIVESSE LÁ, PROPORCIONANDO UMA EXPERIÊNCIA ÚNICA E EMOCIONANTE DE CORRIDA SUSTENTÁVEL.
        </p>
        <button className="promo-button">
          VEJA AGORA <span className="arrow">›</span>
        </button>
      </div>
      <div className="promo-image">
        <img src="./src/public/img/imagem6.jpg" alt="Formula E imagem" />
      </div>
    </div>
  );
};

export default FormulaEPromo;