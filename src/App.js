// HeartAnimation.js
import React, { useEffect, useState } from 'react';
import './App.css';

const HeartAnimation = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 2000); // Délai de 2 secondes avant d'afficher le texte

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container">
            <div className="heart"></div>
            {showText && <div className="love-text">Tu me manque Felana keliko 🥺</div>}
        </div>
    );
};

export default HeartAnimation;
