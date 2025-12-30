import React from 'react';
import FadeIn from '../components/FadeIn';
import Typewriter from '../components/Typerwriter';
import CyberBackground from '../components/CyberBackground';
import { 
  Mail, 
  ShieldCheck, 
  MapPin, 
  Send, 
  Sparkles,
  Clock,
  ChevronDown 
} from 'lucide-react';

const Contact = () => {
  // URL de destino do formulário
  const formEmailAction = "https://formspree.io/f/contato.zentri@gmail.com";

  // --- FUNÇÃO DE MÁSCARA DE TELEFONE ---
  const handlePhone = (e) => {
    let value = e.target.value;
    
    // 1. Remove tudo o que NÃO é número (letras, símbolos)
    value = value.replace(/\D/g, "");
    
    // 2. Limita a 11 dígitos (DDD + 9 números)
    value = value.slice(0, 11);

    // 3. Aplica a formatação visual: (XX) XXXXX-XXXX
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    
    // Devolve o valor formatado para o campo
    e.target.value = value;
  };

  return (
    // <main> indica o conteúdo principal da página
    <main className="min-h-screen pt-32 pb-20 px-4 bg-black relative z-10">
      
      {/* Efeito decorativo */}
      <div aria-hidden="true">
        <CyberBackground />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* ================= HERO SECTION ================= */}
        <header className="max-w-7xl mx-auto text-center mb-16">
          <FadeIn>
              <span className="text-zentri-main font-bold tracking-widest uppercase text-xs mb-4 block">
                Contato
              </span>
              
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
        </header>

        {/* ================= GRID: INFO + FORM ================= */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* --- LADO ESQUERDO: INFORMAÇÕES --- */}
          <section aria-label="Informações de Contato">
            <FadeIn direction="right" className="space-y-10">
                
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Sparkles className="text-zentri-main" size={24} aria-hidden="true" />
                        Por que a Zentri?
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Não somos apenas uma agência de design. Somos o seu braço direito tecnológico focado em converter pixels em lucro real.
                    </p>
                </div>

                <address className="not-italic">
                    <ul className="grid gap-6">
                        {/* Info E-mail */}
                        <li>
                            <div className="group flex items-center gap-5 p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-zentri-main/30 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-zentri-main/10 flex items-center justify-center text-zentri-main border border-zentri-main/20 shrink-0">
                                    <Mail size={22} aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">E-mail</h3>
                                    <a href="mailto:contato@zentri.com.br" className="text-gray-400 text-sm hover:text-zentri-main transition-colors">
                                        contato@zentri.com.br
                                    </a>
                                </div>
                            </div>
                        </li>

                        {/* Info Localização */}
                        <li>
                            <div className="group flex items-center gap-5 p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-zentri-main/30 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-zentri-main/10 flex items-center justify-center text-zentri-main border border-zentri-main/20 shrink-0">
                                    <MapPin size={22} aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Localização</h3>
                                    <p className="text-gray-400 text-sm">Rio de Janeiro, Brasil (Atendimento Global)</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </address>

                <div className="p-6 bg-zentri-main/5 border border-zentri-main/10 rounded-2xl flex gap-4 items-center">
                    <ShieldCheck className="text-zentri-main shrink-0" size={32} aria-hidden="true" />
                    <p className="text-xs text-gray-500 leading-snug">
                        <b>Sua privacidade é prioridade.</b> Utilizamos criptografia de ponta para proteger seus dados e respeitamos integralmente a LGPD.
                    </p>
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-xs justify-center lg:justify-start">
                    <Clock size={14} aria-hidden="true" />
                    <span>Horário comercial: Seg a Sex, 09h — 18h</span>
                </div>
            </FadeIn>
          </section>

          {/* --- LADO DIREITO: FORMULÁRIO --- */}
          <section aria-label="Formulário de Orçamento">
            <FadeIn direction="left">
                <form 
                  action={formEmailAction}
                  method="POST"
                  className="bg-zentri-card/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group"
                >
                    {/* Honeypot */}
                    <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

                    <div className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="form-nome" className="text-sm font-bold text-white ml-1">Nome</label>
                                <input 
                                    id="form-nome"
                                    name="Nome"
                                    type="text" 
                                    required
                                    placeholder="Seu nome" 
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="form-whatsapp" className="text-sm font-bold text-white ml-1">Whatsapp</label>
                                {/* INPUT MODIFICADO COM MÁSCARA */}
                                <input 
                                    id="form-whatsapp"
                                    name="Whatsapp"
                                    type="tel" 
                                    required
                                    maxLength={15} // Limite visual para (XX) XXXXX-XXXX
                                    onInput={handlePhone} // Ativa a função de máscara
                                    placeholder="(00) 00000-0000" 
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="form-email" className="text-sm font-bold text-white ml-1">E-mail Corporativo</label>
                            <input 
                                id="form-email"
                                name="Email"
                                type="email" 
                                required
                                placeholder="seu@email.com" 
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="form-servico" className="text-sm font-bold text-white ml-1">Como podemos ajudar?</label>
                            <div className="relative group/select">
                               <select 
                                  id="form-servico"
                                  name="Servico"
                                  defaultValue=""
                                  required
                                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zentri-main transition-colors appearance-none cursor-pointer relative z-10"
                                >
                                    <option value="" disabled>Selecione uma opção</option>
                                    <option value="site">Criar um Site / Landing Page</option>
                                    <option value="trafego">Gestão de Tráfego Pago</option>
                                    <option value="branding">Identidade Visual / Branding</option>
                                    <option value="full">Projeto Completo (Full Service)</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover/select:text-zentri-main transition-colors pointer-events-none z-20" aria-hidden="true">
                                  <ChevronDown size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="form-mensagem" className="text-sm font-bold text-white ml-1">Mensagem (Opcional)</label>
                            <textarea 
                                id="form-mensagem"
                                name="Mensagem"
                                rows="4"
                                placeholder="Conte um pouco sobre o seu projeto..." 
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-zentri-main transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button 
                          type="submit"
                          className="w-full bg-zentri-main text-black font-bold py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,220,130,0.2)] hover:shadow-xl hover:-translate-y-1"
                        >
                            Enviar Solicitação <Send size={18} aria-hidden="true" />
                        </button>
                    </div>
                </form>
            </FadeIn>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;