// App.js
import React from 'react';
import './Style/style.scss' // Importation du fichier SCSS

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Mon application React avec Sass</h1>
      </header>
      <main className="main-content">
        <p>Bienvenue sur mon application React !</p>
      </main>
    </div>
  );
}

export default App;
