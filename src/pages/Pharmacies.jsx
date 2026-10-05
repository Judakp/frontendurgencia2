import React from 'react';
import '../App.css';

function Pharmacies() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <span className="page-kicker">Santé · Ouidah</span>
        <h1>Pharmacies</h1>
        <p>Retrouvez ici les pharmacies, leur localisation et leurs contacts.</p>
      </header>

      <div className="service-grid">
        <article className="service-card">
          <img src="/Pharmacies.jpg" alt="Pharmacie" className="service-card-image" />
          <div className="service-card-body">
            <h2>Pharmacies à Ouidah</h2>
            <p>Cette section est prête à accueillir la liste des pharmacies et leurs informations pratiques.</p>
            <div className="service-card-actions">
              <span className="btn btn-secondary">Informations à venir</span>
            </div>
          </div>
        </article>
      </div>

      <section className="info-panel">
        <h2>Besoin d'une aide immédiate ?</h2>
        <p>Pour une situation urgente, consultez également les informations relatives aux hôpitaux et aux services de secours.</p>
      </section>
    </div>
  );
}

export default Pharmacies;
