import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Principal: Centralizado no mobile (items-center text-center) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start text-center md:text-left">
          
          {/* Coluna 1: Logo e Sobre */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Animação do Losango sincronizada com o Header */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-zentri-main rounded-lg transition-all duration-500 ease-in-out group-hover:rotate-45 group-hover:rounded-[4px]"></div>
                <div className="relative z-10 text-black">
                  <Rocket size={20} />
                </div>
              </div>
              <h1 className="text-2xl font-extrabold text-white tracking-tighter">
                ZENTRI<span className="text-zentri-main">.</span>
              </h1>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Agência digital focada em unir Design de alta fidelidade com estratégias de tráfego que geram receita real.
            </p>
            
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20}/>} href="#" />
              <SocialIcon icon={<Linkedin size={20}/>} href="#" />
              <SocialIcon icon={<Mail size={20}/>} href="#" />
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navegação</h3>
            <ul className="space-y-4">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/projects" text="Projetos" />
              <FooterLink to="/services" text="Serviços" />
              <FooterLink to="/about" text="Sobre Nós" />
              <FooterLink to="/contact" text="Contato" />
            </ul>
          </div>

          {/* Coluna 3: Expertise */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Expertise</h3>
            <ul className="space-y-4">
              <li className="text-gray-500 text-sm hover:text-white transition-colors cursor-default">UI/UX Design</li>
              <li className="text-gray-500 text-sm hover:text-white transition-colors cursor-default">Desenvolvimento Web</li>
              <li className="text-gray-500 text-sm hover:text-white transition-colors cursor-default">Gestão de Tráfego</li>
              <li className="text-gray-500 text-sm hover:text-white transition-colors cursor-default">Branding</li>
              <li className="text-gray-500 text-sm hover:text-white transition-colors cursor-default">SEO & Conteúdo</li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Novidades</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-[240px]">
              Receba insights sobre design e performance mensalmente.
            </p>
            
            <form className="flex w-full max-w-sm gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/5 border border-white/10 text-white placeholder:text-gray-600 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-zentri-main transition-all text-sm"
              />
              <button 
                type="submit"
                className="bg-zentri-main text-black p-3 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,220,130,0.2)]"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Zentri Agency. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 text-[10px] uppercase tracking-widest hover:text-zentri-main transition-colors">Termos</a>
            <a href="#" className="text-gray-600 text-[10px] uppercase tracking-widest hover:text-zentri-main transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="text-gray-500 text-sm hover:text-zentri-main transition-all inline-block hover:translate-x-1 md:hover:translate-x-1">
      {text}
    </Link>
  </li>
);

const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-zentri-main hover:text-black transition-all hover:-translate-y-1 border border-white/5"
  >
    {icon}
  </a>
);

export default Footer;