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
      {/* h-20 garante que o menu hambúrguer não fique colado no topo */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[5002]">
        
        {/* LOGO */}
        <button onClick={() => handleJump('/')} className="flex items-center gap-2 outline-none">
          <div className="w-9 h-9 bg-zentri-main rounded flex items-center justify-center text-black">
            <Rocket size={20} />
          </div>
          <span className="text-xl font-bold text-white tracking-tighter">ZEN<span className="text-zentri-main">TRI</span></span>
        </button>

        {/* BOTÃO HAMBÚRGUER (Morphing Animation) */}
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
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path ? 'text-zentri-main' : 'text-gray-400 hover:text-white'
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