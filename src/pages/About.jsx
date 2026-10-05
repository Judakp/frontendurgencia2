import React from 'react';
import '../App.css';

const About = () => (
  <div className="page-shell">
    <header className="page-header">
      <span className="page-kicker">À propos</span>
      <h1>À propos d'Urgencia</h1>
      <p>Un projet pensé pour rendre les services essentiels de Ouidah plus faciles à trouver.</p>
    </header>

    <section className="info-panel">
      <h2>Notre objectif</h2>
      <p>
        Urgencia rassemble dans une interface simple les informations utiles
        concernant les pharmacies, les hôpitaux et les services de secours.
        L'objectif est de permettre aux habitants comme aux visiteurs de
        trouver plus rapidement le bon service.
      </p>
    </section>

    <section className="info-panel">
      <h2>Une interface pensée pour l'urgence</h2>
      <p>
        Les informations importantes sont organisées pour être lisibles sur
        ordinateur comme sur téléphone, avec une couleur rouge réservée aux
        actions réellement urgentes.
      </p>
    </section>
  </div>
);

export default About;
