import React from 'react';
import '../Style/style.scss';

// composant children pour le cas ou il y aurait plus de 2 bannières.
function Banner({children}) { 
    return (
        <div>
            {children}
        </div>
    )
}

export default Banner