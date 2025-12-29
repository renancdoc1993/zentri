import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // SEU NÚMERO DE WHATSAPP (Substitua pelo real)
  const whatsappNumber = "5511999999999"; 
  const whatsappMessage = "Olá! Vim pelo site da Zentri e gostaria de mais informações.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Adicionei 'Contato' aqui na lista
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/services' },
    { name: 'Projetos', path: '/projects' },
    { name: 'Sobre Nós', path: '/about' },
    { name: 'Contato', path: '/contact' }, 
  ];

  const headerClass = scrolled 
    ? 'text/90 backdrop-blur-md border-b border-zentri-muted py-2 shadow-sm' 
    : 'bg-transparent py-4';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-zentri-main p-2 rounded-lg text-black group-hover:rotate-12 transition-transform">
                <Rocket size={24} />
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tighter">
              ZENTRI<span className="text-zentri-main">.</span>
            </h1>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Links do Menu */}
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-medium transition-colors hover:text-zentri-main ${location.pathname === link.path ? 'text-zentri-main' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Divisor Visual */}
            <div className="h-6 w-px bg-white/10 mx-2"></div>

            {/* Apenas o Botão WhatsApp ficou como destaque */}
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:-translate-y-1"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Ícone WhatsApp Mobile */}
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-[#25D366]">
                <MessageCircle size={28} />
            </a>

            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:text-zentri-main transition">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden text absolute w-full shadow-xl h-screen z-40 flex flex-col items-center justify-center space-y-8 border-t border-zentri-muted">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-2xl font-bold text-white hover:text-zentri-main transition">
                {link.name}
              </Link>
            ))}
             
             <div className="mt-8 w-64">
                <a 
                  href={whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg w-full"
                >
                  <MessageCircle size={24} />
                  WhatsApp
                </a>
             </div>
        </div>
      )}
    </header>
  );
};

export default Header;