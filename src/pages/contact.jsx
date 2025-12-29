import React from 'react';
import FadeIn from '../components/FadeIn';
import Typewriter from '../components/Typerwriter'; 
import { 
  Mail, 
  ShieldCheck, 
  MapPin, 
  Send, 
  Sparkles,
  Clock
} from 'lucide-react';

const Contact = () => {
  // URL de destino do formulário
  const formEmailAction = "https://formspree.io/f/contato.zentri@gmail.com";

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 bg-black overflow-hidden">
      
      {/* ================= EFEITOS DE FUNDO (TECH BACKGROUND) ================= */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-zentri-main opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-emerald-500 opacity-[0.06] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
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
                  Para um atendimento imediato, utilize nossa <b>IA no canto da tela</b>. Para orçamentos detalhados, preencha o formulário abaixo.
              </p>
          </FadeIn>
        </div>

        {/* ================= GRID: INFO + FORM ================= */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* --- LADO ESQUERDO: INFORMAÇÕES --- */}
          <FadeIn direction="right" className="space-y-10">
              
              <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Sparkles className="text-zentri-main" size={24} />
                      Por que a Zentri?
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg">
                      Não somos apenas uma agência de design. Somos o seu braço direito tecnológico focado em converter pixels em lucro real.
                  </p>
              </div>

              <div className="grid gap-6">
                  {/* Info E-mail */}
                  <div className="group flex items-center gap-5 p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-zentri-main/30 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-zentri-main/10 flex items-center justify-center text-zentri-main border border-zentri-main/20">
                          <Mail size={22} />
                      </div>
                      <div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">E-mail</h3>
                          <p className="text-gray-400 text-sm">contato@zentri.com.br</p>
                      </div>
                  </div>

                  {/* Info Localização */}
                  <div className="group flex items-center gap-5 p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-zentri-main/30 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-zentri-main/10 flex items-center justify-center text-zentri-main border border-zentri-main/20">
                          <MapPin size={22} />
                      </div>
                      <div>
                          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Localização</h3>
                          <p className="text-gray-400 text-sm">Rio de Janeiro, Brasil (Atendimento Global)</p>
                      </div>
                  </div>
              </div>

              {/* Selo de Segurança */}
              <div className="p-6 bg-zentri-main/5 border border-zentri-main/10 rounded-2xl flex gap-4 items-center">
                  <ShieldCheck className="text-zentri-main shrink-0" size={32} />
                  <p className="text-xs text-gray-500 leading-snug">
                      <b>Sua privacidade é prioridade.</b> Utilizamos criptografia de ponta para proteger seus dados e respeitamos integralmente a LGPD.
                  </p>
              </div>

              <div className="flex items-center gap-2 text-gray-600 text-xs justify-center lg:justify-start">
                  <Clock size={14} />
                  <span>Horário comercial: Seg a Sex, 09h — 18h</span>
              </div>
          </FadeIn>

          {/* --- LADO DIREITO: FORMULÁRIO COM ENVIO --- */}
          <FadeIn direction="left">
              <form 
                action={formEmailAction}
                method="POST"
                className="bg-zentri-card p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group"
              >
                  {/* Honeypot para evitar spam */}
                  <input type="text" name="_gotcha" className="hidden" />

                  <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="text-sm font-bold text-white ml-1">Nome</label>
                              <input 
                                  name="Nome"
                                  type="text" 
                                  required
                                  placeholder="Seu nome" 
                                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors"
                              />
                          </div>
                          <div className="space-y-2">
                              <label className="text-sm font-bold text-white ml-1">Whatsapp</label>
                              <input 
                                  name="Whatsapp"
                                  type="tel" 
                                  required
                                  placeholder="(00) 00000-0000" 
                                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors"
                              />
                          </div>
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-bold text-white ml-1">E-mail Corporativo</label>
                          <input 
                              name="Email"
                              type="email" 
                              required
                              placeholder="seu@email.com" 
                              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors"
                          />
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-bold text-white ml-1">Como podemos ajudar?</label>
                          <select 
                            name="Servico"
                            defaultValue=""
                            required
                            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zentri-main transition-colors appearance-none cursor-pointer"
                          >
                              <option value="" disabled>Selecione uma opção</option>
                              <option value="site">Criar um Site / Landing Page</option>
                              <option value="trafego">Gestão de Tráfego Pago</option>
                              <option value="branding">Identidade Visual / Branding</option>
                              <option value="full">Projeto Completo (Full Service)</option>
                          </select>
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-bold text-white ml-1">Mensagem (Opcional)</label>
                          <textarea 
                              name="Mensagem"
                              rows="4"
                              placeholder="Conte um pouco sobre o seu projeto..." 
                              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors resize-none"
                          ></textarea>
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-zentri-main text-black font-bold py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,220,130,0.2)] hover:shadow-xl hover:-translate-y-1"
                      >
                          Enviar Solicitação <Send size={18} />
                      </button>
                  </div>
              </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;