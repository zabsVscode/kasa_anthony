import React from 'react';
import { Link } from "react-router-dom"
import records from '../Datas/logements.json';
import '../Style/style.scss';


// composant qui permet de récupérer la liste des logements et de les afficher sous forme de card

const Cards = () => {
    return (
        <div className="logements">

            {/* liste la base de données */}
            {records.map((record) => {
                const { id, title } = record;

                // affiche la fiche logement sur la page d'accueil
                return (
                    <div className="fiche-logement" key={id}>
                        <Link to={{ pathname: "/Logement", search: "?_id="+id }}>
                            <h3>{"Titre de la location"}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards