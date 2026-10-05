import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Home';
import Pharmacies from './pages/Pharmacies';
import Hopitaux from './pages/Hopitaux';
import Pompiers from './pages/Pompiers';
import Blog from './pages/Blog';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/pharmacies" element={<Pharmacies />} />
          <Route path="/hopitaux" element={<Hopitaux />} />
          <Route path="/pompiers" element={<Pompiers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/apropos" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
