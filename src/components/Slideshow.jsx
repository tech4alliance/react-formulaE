import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
    "./src/public/img/imagem1.webp",
    "./src/public/img/imagem2.webp",
    "./src/public/img/imagem3.webp"
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slideshow-container">
            <button onClick={prevImage} className="slideshow-button prev">
                <FaChevronLeft />
            </button>
            <img src={images[currentIndex]} alt={`Slideshow ${currentIndex + 1}`} className="slideshow-image" />
            <button onClick={nextImage} className="slideshow-button next">
                <FaChevronRight />
            </button>
            <div className="slideshow-indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slideshow;