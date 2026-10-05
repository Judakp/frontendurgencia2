import React from 'react';
import '../App.css';

function Hopitaux() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <span className="page-kicker">Santé · Ouidah</span>
        <h1>Hôpitaux</h1>
        <p>Retrouvez ici les établissements hospitaliers, leur localisation et leurs contacts.</p>
      </header>

      <div className="service-grid">
        <article className="service-card">
          <img src="/Hopital2.jpg" alt="Hôpital" className="service-card-image" />
          <div className="service-card-body">
            <h2>Établissements hospitaliers</h2>
            <p>Cette section est prête à accueillir la liste des hôpitaux et leurs informations pratiques.</p>
            <div className="service-card-actions">
              <span className="btn btn-secondary">Informations à venir</span>
            </div>
          </div>
        </article>
      </div>

      <section className="info-panel">
        <h2>En cas d'urgence</h2>
        <p>Si vous recherchez les services de secours, consultez la page dédiée aux sapeurs-pompiers.</p>
      </section>
    </div>
  );
}

export default Hopitaux;
