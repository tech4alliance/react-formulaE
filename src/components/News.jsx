import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../css/news.css';

const CustomButton = ({ children, onClick, disabled, variant, size, className }) => {
  const baseClasses = "px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center";
  const variantClasses = {
    default: "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    link: "text-blue-500 hover:text-blue-600 underline-offset-4 hover:underline",
  };
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-6 text-lg",
    icon: "h-10 w-10",
  };

  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${sizeClasses[size] || sizeClasses.default} ${className || ''}`;

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

const CustomCard = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

const CustomCardContent = ({ children, className }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

const CustomCardTitle = ({ children, className }) => {
  return <h3 className={`text-xl font-bold mb-2 text-gray-800 ${className}`}>{children}</h3>;
};

const newsItems = [
  {
    id: 1,
    title: "Piloto Brasileiro Lidera Campeonato de Fórmula E",
    description: "Lucas da Silva surpreende o mundo ao assumir a liderança do campeonato após vitória emocionante em São Paulo.",
    image: "./src/public/img/imagem1.webp",
  },
  {
    id: 2,
    title: "Nova Tecnologia de Bateria Revoluciona Fórmula E",
    description: "Equipes testam baterias de grafeno que prometem dobrar a autonomia dos carros elétricos de corrida.",
    image: "./src/public/img/imagem2.webp",
  },
  {
    id: 3,
    title: "Corrida Noturna de Fórmula E Anunciada para Dubai",
    description: "Primeira corrida noturna da história da Fórmula E será realizada em Dubai, prometendo um espetáculo de luzes e velocidade.",
    image: "./src/public/img/imagem3.webp",
  },
  {
    id: 4,
    title: "Inteligência Artificial Otimiza Estratégias de Corrida",
    description: "Equipes de Fórmula E adotam IA para analisar dados em tempo real e melhorar tomadas de decisão durante as corridas.",
    image: "./src/public/img/imagem4.webp",
  },
  {
    id: 5,
    title: "Fãs Votam em Tempo Real para Dar 'Boost' aos Pilotos",
    description: "Nova feature permite que fãs votem durante a corrida para dar um boost de energia extra ao seu piloto favorito.",
    image: "./src/public/img/imagem5.webp",
  },
  {
    id: 6,
    title: "Pista de Fórmula E Alimentada 100% por Energia Solar",
    description: "Próxima etapa do campeonato será realizada em uma pista totalmente sustentável, alimentada por energia solar.",
    image: "./src/public/img/imagem7.jpg",
  },
];

const News = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const pageCount = Math.ceil(newsItems.length / itemsPerPage);
  const displayedNews = newsItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className={`news-section ${isLoaded ? 'news-loaded' : ''}`}>
      <h2 className="news-title">Últimas Notícias</h2>
      <div className="news-grid">
        {displayedNews.map((item, index) => (
          <CustomCard key={item.id} className="news-card" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="news-image-container">
              <img src={item.image} alt={item.title} className="news-image" loading="lazy" />
            </div>
            <CustomCardContent>
              <CustomCardTitle>{item.title}</CustomCardTitle>
              <p className="news-description">{item.description}</p>
            </CustomCardContent>
          </CustomCard>
        ))}
      </div>
      <div className="news-pagination">
        <CustomButton 
          onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
          variant="outline"
          size="icon"
          className="pagination-button"
        >
          <ChevronLeft size={24} />
        </CustomButton>
        <span className="news-pagination-info">{currentPage + 1} / {pageCount}</span>
        <CustomButton 
          onClick={() => setCurrentPage(prev => Math.min(pageCount - 1, prev + 1))}
          disabled={currentPage === pageCount - 1}
          variant="outline"
          size="icon"
          className="pagination-button"
        >
          <ChevronRight size={24} />
        </CustomButton>
      </div>
    </section>
  );
};

export default News;