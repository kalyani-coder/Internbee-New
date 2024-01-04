// Carousel.js

import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setIsTransitioning(true);
        const timeout = setTimeout(() => {
            setIsTransitioning(false);
        }, 500); // Adjust the timeout duration as needed
        return () => clearTimeout(timeout);
    }, [currentImage]);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    return (
        <div className="w-5/6  flex items-center justify-center relative" style={{ height: "450px" }}>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 font-bold py-2 px-4 border border-gray-400 rounded-full focus:outline-none"
                onClick={prevImage}
            >
                {'<'}
            </button>
            <div
                className={`w-full h-full max-w-full transition-opacity ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            >
                <img
                    src={images[currentImage]}
                    alt={`Internship Image ${currentImage + 1}`}
                    className="object-cover w-full h-full"
                />
            </div>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 font-bold py-2 px-4 border border-gray-400 rounded-full focus:outline-none"
                onClick={nextImage}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Carousel;
