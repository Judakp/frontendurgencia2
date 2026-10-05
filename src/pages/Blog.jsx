import React from 'react';
import '../App.css';

const Blog = () => (
  <div className="page-shell">
    <header className="page-header">
      <span className="page-kicker">Guides · Ouidah</span>
      <h1>Blog</h1>
      <p>Conseils, découvertes et informations pratiques pour les visiteurs de Ouidah.</p>
    </header>

    <div className="blog-grid">
      <article className="blog-card">
        <h2>Découverte de Ouidah</h2>
        <p>Explorez les lieux, les services et les informations pratiques qui peuvent rendre votre séjour plus agréable.</p>
        <span className="page-kicker">Article à venir</span>
      </article>

      <article className="blog-card">
        <h2>Conseils santé pour voyageurs</h2>
        <p>Découvrez quelques réflexes simples pour mieux préparer votre séjour et savoir où demander de l'aide.</p>
        <span className="page-kicker">Article à venir</span>
      </article>
    </div>
  </div>
);

export default Blog;
