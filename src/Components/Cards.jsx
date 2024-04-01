import React from 'react';
import { Link } from "react-router-dom"
import records from '../Datas/logements.json';
import "../Style/Cards.scss"


// Composant qui permet de récupérer la liste des logements et de les afficher sous forme de card
const Cards = () => {
    const handleCardClick = (id) => {
        window.location.href = "/Logement?_id=" + id;
    };

    return (
        <div className="logements">

            {/* Liste la base de données */}
            {records.map((record) => {
                const { id, title } = record;

                // Affiche la fiche logement sur la page d'accueil
                return (
                    <div className="fiche-logement" key={id} onClick={() => handleCardClick(id)}>
                        <Link to={{ pathname: "/Logement", search: "?_id="+id }}>
                            <h3>{"Titre de la location"}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;
