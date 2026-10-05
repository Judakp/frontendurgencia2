import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Pompiers() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <span className="page-kicker">Urgence · Secours</span>
        <h1>Sapeurs-pompiers</h1>
        <p>Retrouvez les unités de sapeurs-pompiers, leur localisation et les informations de contact.</p>
      </header>

      <div className="service-grid">
        <article className="service-card">
          <img src="/pompiers2.jpg" alt="Sapeurs-pompiers" className="service-card-image" />
          <div className="service-card-body">
            <h2>Services de secours</h2>
            <p>Cette section est prête à accueillir les unités et leurs coordonnées.</p>
            <div className="service-card-actions">
              <span className="btn btn-danger">Informations à venir</span>
            </div>
          </div>
        </article>
      </div>

      <section className="info-panel">
        <h2>Vous recherchez un autre service ?</h2>
        <p>Accédez rapidement aux informations concernant les pharmacies ou les hôpitaux.</p>
        <div className="service-card-actions">
          <Link to="/pharmacies" className="btn">Pharmacies</Link>
          <Link to="/hopitaux" className="btn btn-secondary">Hôpitaux</Link>
        </div>
      </section>
    </div>
  );
}

export default Pompiers;
