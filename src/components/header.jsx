import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 z-50 group">
            {/* O container define a cor do texto como preta (text-black) */}
            <div className="w-10 h-10 bg-zentri-main rounded-lg flex items-center justify-center text-black shadow-[0_0_15px_rgba(0,220,130,0.3)] transition-transform group-hover:scale-110">
                {/* MUDANÇA AQUI: Removi o fill="currentColor". Agora ele usa apenas o contorno preto. */}
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
              className={`text-sm font-medium transition-colors hover:text-zentri-main ${
                location.pathname === link.path ? 'text-zentri-main' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTÃO MOBILE (Hambúrguer) */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* --- MENU MOBILE (OVERLAY) --- */}
        <div 
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`text-2xl font-bold tracking-wide transition-transform hover:scale-105 ${
                  location.pathname === link.path ? 'text-zentri-main' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
        </div>

      </div>
    </header>
  );
};

export default Header;