import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Style/style.scss';
import logo from '../Assets/logo.png';

function Navbar() {
    // Utilisation d'un tableau en prévision d'ajout au menu
    const menuItems = [
        { to: "/", label: "Accueil" },
        { to: "/about", label: "A Propos" },
    ];

    // défini le choix actif et affiche le label du menu
    const menuItem = ({ to, label }) => (
        <li key={to}>
            <NavLink to={to}>
                {label}
            </NavLink>
        </li>
    );

    // affiche le logo et boucle sur les éléments du menu
    return (
        <div className='navbar'>
            <Link to="/">
                <img src={logo} alt='Logo du site Kasa' />
            </Link>
            <nav>
                <ul>{menuItems.map(menuItem)}</ul>
            </nav>
        </div>
    );
}

export default Navbar