import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Logo e Sobre */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-zentri-main p-2 rounded-lg text-black group-hover:rotate-12 transition-transform">
                  <Rocket size={24} />
              </div>
              <h1 className="text-2xl font-extrabold text-white tracking-tighter">
                ZENTRI<span className="text-zentri-main">.</span>
              </h1>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Agência digital focada em unir Design de alta fidelidade com estratégias de tráfego que geram receita real.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20}/>} href="#" />
              <SocialIcon icon={<Linkedin size={20}/>} href="#" />
              <SocialIcon icon={<Mail size={20}/>} href="#" />
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-6">Navegação</h3>
            <ul className="space-y-4">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/projects" text="Projetos" />
              <FooterLink to="/services" text="Serviços" />
              <FooterLink to="/about" text="Sobre Nós" />
              <FooterLink to="/contact" text="Contato" />
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h3 className="text-white font-bold mb-6">Expertise</h3>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">UI/UX Design</li>
              <li className="text-gray-400 text-sm">Desenvolvimento Web</li>
              <li className="text-gray-400 text-sm">Gestão de Tráfego</li>
              <li className="text-gray-400 text-sm">Branding</li>
              <li className="text-gray-400 text-sm">SEO & Conteúdo</li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter (CORRIGIDO) */}
          <div>
            <h3 className="text-white font-bold mb-6">Novidades</h3>
            <p className="text-gray-400 text-sm mb-4">
              Receba insights sobre design e performance mensalmente.
            </p>
            
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail corporativo" 
                className="bg-white/5 border border-white/10 text-white placeholder:text-gray-600 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-zentri-main focus:bg-white/10 transition-colors"
              />
              
              {/* BOTÃO DA SETA - Hover corrigido para Verde/Branco */}
              <button 
                type="submit"
                className="bg-zentri-main text-black p-3 rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-[0_0_15px_rgba(0,220,130,0.3)]"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Zentri Agency. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 text-xs hover:text-zentri-main">Termos</a>
            <a href="#" className="text-gray-600 text-xs hover:text-zentri-main">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-componentes para limpar o código
const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-gray-400 text-sm hover:text-zentri-main hover:translate-x-1 transition-all inline-block">
      {text}
    </Link>
  </li>
);

const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-zentri-main hover:text-black transition-all hover:-translate-y-1"
  >
    {icon}
  </a>
);

export default Footer;