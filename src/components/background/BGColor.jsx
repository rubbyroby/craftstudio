// Background.js
import React from 'react';

function Background({ backgroundColor }) {
    const backgroundStyle = {
        backgroundColor: backgroundColor, // Utilisez la couleur de fond passée en tant que prop
        // Autres styles de fond (image, gradient, etc.) peuvent être ajoutés ici
    };

    return (
        <div style={backgroundStyle}>
            {/* Contenu de la page */}
        </div>
    );
}

export default Background;
