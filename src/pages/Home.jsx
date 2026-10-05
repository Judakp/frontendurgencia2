import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../components/Accueil.css';

const Home = () => (
  <div className="home-container">
    <section className="home-hero">
      <div className="home-hero-inner">
        <div>
          <span className="hero-kicker">Ouidah · Services essentiels</span>
          <h1>Les bons services, au bon moment.</h1>
          <p>
            Urgencia vous aide à trouver rapidement les services essentiels
            à Ouidah : pharmacies, hôpitaux et sapeurs-pompiers.
          </p>
          <div className="hero-actions">
            <Link to="/pharmacies" className="btn btn-light">Trouver une pharmacie</Link>
            <Link to="/pompiers" className="btn btn-danger">Besoin d'une urgence ?</Link>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/Urgencia.jpg" alt="Urgencia à Ouidah" />
        </div>
      </div>
    </section>

    <section className="home-section">
      <div className="section-heading">
        <h2>Les services essentiels</h2>
        <p>Un accès simple et lisible aux informations dont vous pouvez avoir besoin pendant votre séjour.</p>
      </div>

      <div className="home-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
        >
          <SwiperSlide><img src="/Hopital.jpg" alt="Hôpital à Ouidah" /></SwiperSlide>
          <SwiperSlide><img src="/Pharmacie.jpg" alt="Pharmacie à Ouidah" /></SwiperSlide>
          <SwiperSlide><img src="/Pompiers.jpeg" alt="Sapeurs-pompiers à Ouidah" /></SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section className="home-section">
      <div className="section-heading">
        <h2>Accéder rapidement aux services</h2>
        <p>Choisissez le service qui correspond à votre besoin.</p>
      </div>

      <div className="info-section">
        <img src="/Pharmacies.jpg" alt="Pharmacie" className="info-image" />
        <div className="info-text">
          <span className="service-label">Santé · Pharmacies</span>
          <h2>Pharmacies</h2>
          <p>Retrouvez les pharmacies et les informations utiles pour vos besoins médicaux courants ou urgents.</p>
          <Link to="/pharmacies" className="btn">Voir les pharmacies</Link>
        </div>
      </div>
    </section>

    <section className="home-section">
      <div className="info-section reverse">
        <div className="info-text">
          <span className="service-label">Santé · Hôpitaux</span>
          <h2>Hôpitaux</h2>
          <p>Accédez aux établissements hospitaliers et préparez plus facilement votre déplacement en cas de besoin.</p>
          <Link to="/hopitaux" className="btn">Voir les hôpitaux</Link>
        </div>
        <img src="/Hopital2.jpg" alt="Hôpital" className="info-image" />
      </div>
    </section>

    <section className="home-section">
      <div className="info-section">
        <img src="/pompiers2.jpg" alt="Sapeurs-pompiers" className="info-image" />
        <div className="info-text">
          <span className="service-label">Urgence · Secours</span>
          <h2>Sapeurs-pompiers</h2>
          <p>Retrouvez les informations nécessaires pour contacter rapidement les services de secours.</p>
          <Link to="/pompiers" className="btn btn-danger">Voir les secours</Link>
        </div>
      </div>
    </section>

    <section className="blog-section">
      <div className="blog-section-inner">
        <div className="section-heading">
          <h2>Conseils et découvertes</h2>
          <p>Des informations utiles pour mieux profiter de votre séjour à Ouidah.</p>
        </div>

        <div className="blog-list">
          <article className="blog-item">
            <h3>Découverte de Ouidah</h3>
            <p>Explorez les lieux, les services et les informations pratiques utiles aux visiteurs.</p>
            <Link to="/blog">Découvrir les articles →</Link>
          </article>
          <article className="blog-item">
            <h3>Conseils santé pour voyageurs</h3>
            <p>Quelques réflexes simples pour voyager plus sereinement et savoir où trouver de l'aide.</p>
            <Link to="/blog">Lire les conseils →</Link>
          </article>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
