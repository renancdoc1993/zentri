import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes (Caminhos corrigidos)
import Header from './components/Header';
import Footer from './components/footer';
import TechBackground from './components/TechBackground';
import ScrollToTop from './components/ScrolltoTop';

// Páginas
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Fundo Tecnológico */}
      <TechBackground />
      
      <div className="relative z-10 font-sans text-white">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;