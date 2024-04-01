import React from 'react';
import "../Style/Shaping.scss"

// composant qui gère la marge gauche et droite de 100% sauf le Footer, et wrappe le contenu enfant
function Shaping({children}) {
    return (
        <div className='shaping'>
            {children}
        </div>
    )
}

export default Shaping