import React from 'react';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import Typewriter from '../components/Typerwriter'; 
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Send, 
  ArrowRight,
  Clock
} from 'lucide-react';

const Contact = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento.";

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4">
      
      {/* ================= HERO SECTION ================= */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <FadeIn>
            <span className="text-zentri-main font-bold tracking-widest uppercase text-xs mb-4 block">Contato</span>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight min-h-[3em] md:min-h-0">
                Seu projeto merece <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zentri-main to-emerald-400">
                    <Typewriter text="Destaque Absoluto." speed={100} delay={0.5} />
                </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Preencha o formulário ou chame no WhatsApp. Respondemos em até 24 horas.
            </p>
        </FadeIn>
      </div>

      {/* ================= GRID: INFO + FORM ================= */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* --- LADO ESQUERDO: INFORMAÇÕES --- */}
        <FadeIn direction="right" className="space-y-8">
            
            {/* Card WhatsApp */}
            <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-6 p-6 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl hover:bg-[#25D366]/20 transition-all cursor-pointer"
            >
                <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] group-hover:scale-110 transition-transform">
                    <MessageCircle size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-1">WhatsApp Rápido</h3>
                    <p className="text-[#25D366] text-sm font-medium flex items-center gap-1">
                        Iniciar conversa agora <ArrowRight size={16}/>
                    </p>
                </div>
            </a>

            {/* Card Email */}
            <div className="flex items-center gap-6 p-6 bg-zentri-card border border-white/5 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-zentri-main border border-white/10">
                    <Mail size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">E-mail</h3>
                    <p className="text-gray-400 text-sm">contato@zentri.com.br</p>
                </div>
            </div>

            {/* Card Localização */}
            <div className="flex items-center gap-6 p-6 bg-zentri-card border border-white/5 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-zentri-main border border-white/10">
                    <MapPin size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Base</h3>
                    <p className="text-gray-400 text-sm">São Paulo, SP - Brasil</p>
                    <p className="text-gray-500 text-xs mt-1">Atendemos globalmente (Remoto)</p>
                </div>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm mt-4 justify-center lg:justify-start">
                <Clock size={16} />
                <span>Segunda a Sexta, das 09h às 18h</span>
            </div>

        </FadeIn>

        {/* --- LADO DIREITO: FORMULÁRIO --- */}
        <FadeIn direction="left">
            <form className="bg-zentri-card p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
                
                <div className="absolute top-0 right-0 w-64 h-64 bg-zentri-main opacity-5 blur-[80px] rounded-full -z-10 group-hover:opacity-10 transition-opacity"></div>

                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white ml-1">Nome</label>
                            <input 
                                type="text" 
                                placeholder="Seu nome" 
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-white ml-1">Whatsapp</label>
                            <input 
                                type="tel" 
                                placeholder="(00) 00000-0000" 
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white ml-1">E-mail Corporativo</label>
                        <input 
                            type="email" 
                            placeholder="seu@email.com" 
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white ml-1">Como podemos ajudar?</label>
                        <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zentri-main transition-colors appearance-none cursor-pointer">
                            <option value="" disabled selected>Selecione uma opção</option>
                            <option value="site">Criar um Site / Landing Page</option>
                            <option value="trafego">Gestão de Tráfego Pago</option>
                            <option value="branding">Identidade Visual / Branding</option>
                            <option value="full">Projeto Completo (Full Service)</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white ml-1">Mensagem (Opcional)</label>
                        <textarea 
                            rows="4"
                            placeholder="Conte um pouco sobre o seu projeto..." 
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors resize-none"
                        ></textarea>
                    </div>

                    {/* BOTÃO ATUALIZADO: VERDE PADRÃO -> HOVER BRANCO */}
                    <button className="w-full bg-zentri-main text-black font-bold py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,220,130,0.2)] hover:shadow-xl hover:-translate-y-1">
                        Enviar Solicitação <Send size={18} />
                    </button>
                </div>
            </form>
        </FadeIn>

      </div>
    </div>
  );
};

export default Contact;