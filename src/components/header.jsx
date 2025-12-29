import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Fecha o menu sempre que mudar de página ou clicar em um link
  useEffect(() => {
    setIsOpen(false);
    // Garante que o scroll da página volte ao topo se necessário
    document.body.style.overflow = 'unset'; 
  }, [location]);

  // Bloqueia o scroll do fundo quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projetos', path: '/projects' },
    { name: 'Serviços', path: '/services' },
    { name: 'Sobre Nós', path: '/about' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        scrolled || isOpen ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[1001]">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-zentri-main rounded-lg flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,220,130,0.4)]">
                <Rocket size={22} /> 
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
                ZEN<span className="text-zentri-main">TRI.</span>
            </span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`text-sm font-medium transition-all hover:text-zentri-main ${
                location.pathname === link.path ? 'text-zentri-main' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTÃO HAMBÚRGUER (Aumentei a área de clique) */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 relative focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <span className={`block absolute h-0.5 w-7 bg-white transform transition duration-500 ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
          <span className={`block absolute h-0.5 w-7 bg-white transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block absolute h-0.5 w-7 bg-white transform transition duration-500 ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
        </button>
      </div>

      {/* --- MENU MOBILE OVERLAY --- */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-black z-[1000] flex flex-col transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
          <nav className="flex flex-col items-start justify-center h-full px-12 space-y-6">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`text-4xl font-black tracking-tighter transition-all duration-300 ${
                    location.pathname === link.path ? 'text-zentri-main' : 'text-white'
                  } ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setIsOpen(false)} // Garante o fechamento ao clicar
                >
                  {link.name}
                </Link>
              ))}
              
              <div className={`pt-6 border-t border-white/10 w-full transition-opacity duration-700 delay-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-gray-500 text-sm italic mb-2">Conecte-se conosco:</p>
                <p className="text-zentri-main font-mono text-lg">contato@zentri.agency</p>
              </div>
          </nav>
      </div>
    </header>
  );
};

export default Header;