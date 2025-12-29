import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJump = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projetos', path: '/projects' },
    { name: 'Serviços', path: '/services' },
    { name: 'Sobre Nós', path: '/about' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[5000] transition-all duration-300 ${
      scrolled || isOpen ? 'bg-black border-b border-white/10' : 'bg-transparent'
    }`}>
      {/* Estilos customizados para a gota orgânica */}
      <style>{`
        @keyframes organic-blob {
          0% { border-radius: 50% 50% 50% 50%; transform: scale(1); }
          33% { border-radius: 60% 40% 50% 50%; transform: scale(1.05) rotate(5deg); }
          66% { border-radius: 40% 60% 40% 60%; transform: scale(0.95) rotate(-5deg); }
          100% { border-radius: 50% 50% 50% 50%; transform: scale(1); }
        }
        .animate-gota {
          animation: organic-blob 3s infinite ease-in-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[5002]">
        
        {/* LOGO */}
        <button 
          onClick={() => handleJump('/')} 
          className="flex items-center gap-4 outline-none group"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Quadrado que vira Losango (45deg) suavemente */}
            <div className="absolute inset-0 bg-zentri-main rounded-lg transition-all duration-500 ease-in-out group-hover:rotate-45 group-hover:rounded-[4px] shadow-[0_0_20px_rgba(0,220,130,0.3)]"></div>
            
            <div className="relative z-10 text-black">
              <Rocket size={20} />
            </div>
          </div>
          
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-white tracking-tighter">
              ZENTRI
            </span>
            
            {/* PONTO COM EFEITO GOTA ORGÂNICA */}
            <div className="relative flex ml-1.5 items-center justify-center">
                {/* Núcleo da Gota */}
                <span className="w-2.5 h-2.5 bg-zentri-main rounded-full animate-gota shadow-[0_0_10px_rgba(0,220,130,0.6)]"></span>
                
                {/* Brilho de Reflexo (simula líquido) */}
                <span className="absolute top-0.5 left-0.5 w-1 h-1 bg-white/40 rounded-full"></span>
                
                {/* Aura de Expansão Orgânica */}
                <span className="absolute inset-0 w-2.5 h-2.5 bg-zentri-main rounded-full animate-ping opacity-40"></span>
            </div>
          </div>
        </button>

        {/* BOTÃO HAMBÚRGUER MOBILE */}
        <button 
          className="md:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-7'}`}></span>
          <span className={`h-0.5 bg-zentri-main transition-all duration-300 ${isOpen ? 'opacity-0 w-0' : 'w-5'}`}></span>
          <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-3'}`}></span>
        </button>

        {/* NAV DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleJump(link.path)}
              className={`text-sm font-medium transition-colors hover:text-zentri-main ${
                location.pathname === link.path ? 'text-zentri-main' : 'text-gray-400'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* MENU MOBILE OVERLAY */}
      <div className={`fixed inset-0 bg-black z-[5001] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navLinks.map((link) => (
          <button 
            key={link.name} 
            onClick={() => handleJump(link.path)} 
            className={`text-4xl font-black transition-transform active:scale-95 ${
              location.pathname === link.path ? 'text-zentri-main' : 'text-white'
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Header;