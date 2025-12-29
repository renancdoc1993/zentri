import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Fecha o menu e libera o scroll ao mudar de rota ou clicar
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  // Trava o scroll quando o menu abre
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <>
      {/* HEADER PRINCIPAL */}
      <header 
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-[1000] ${
          scrolled || isOpen ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* LOGO - Z-index alto para ficar acima do menu se necessário */}
          <Link to="/" className="flex items-center gap-3 relative z-[1010]">
            <div className="w-10 h-10 bg-zentri-main rounded-lg flex items-center justify-center text-black">
              <Rocket size={22} /> 
            </div>
            <span className="text-2xl font-bold text-white">
              ZEN<span className="text-zentri-main">TRI.</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-300 hover:text-zentri-main text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* BOTÃO MOBILE - Usando Lucide Icons para garantir área de clique limpa */}
          <button 
            className="md:hidden text-white p-2 relative z-[1010]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* OVERLAY DO MENU MOBILE */}
      {/* Usamos fixed inset-0 e z-[999] para garantir que ele cubra tudo, exceto o header */}
      <div 
        className={`fixed inset-0 bg-black z-[999] transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name}
              to={link.path} 
              // O segredo para o clique funcionar no mobile: 
              // onClick fechando o estado e garantindo que a navegação ocorra
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-bold tracking-tighter transition-all duration-300 ${
                location.pathname === link.path ? 'text-zentri-main' : 'text-white hover:text-zentri-main'
              } ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          
          <div className={`mt-4 w-12 h-1 bg-zentri-main rounded transition-all delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
          <p className="text-gray-500 text-sm font-mono tracking-widest uppercase">Zentri Agency</p>
        </nav>
      </div>
    </>
  );
};

export default Header;