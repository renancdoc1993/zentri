import React from 'react';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import Typewriter from '../components/Typerwriter'; // <--- Importando o efeito
import { 
  Target, 
  Users, 
  Zap, 
  Linkedin, 
  Instagram
} from 'lucide-react';

const About = () => {
  return (
    <div className="text min-h-screen overflow-hidden">
      
      {/* ================= HERO: MANIFESTO (COM EFEITO) ================= */}
      <section className="pt-32 pb-20 px-4 relative border-b border-zentri-muted/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-zentri-main opacity-5 blur-[100px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeIn>
                <span className="text-zentri-main font-bold tracking-widest uppercase text-xs mb-4 block">Nossa Essência</span>
                
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight min-h-[3em] md:min-h-0">
                    Design de Elite. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zentri-main to-emerald-400">
                        {/* Efeito aplicado aqui */}
                        <Typewriter text="Performance Real." speed={100} delay={0.5} />
                    </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    Unimos a ciência dos dados com a arte do visual. Sem achismos, sem excessos. Apenas o que faz o seu negócio escalar.
                </p>
            </FadeIn>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="py-12 border-b border-zentri-muted/30 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem number="+50" label="Projetos Entregues" />
            <StatItem number="+10M" label="Ads Gerenciados" />
            <StatItem number="3x" label="ROI Médio" />
            <StatItem number="24/7" label="Suporte Dedicado" />
        </div>
      </section>

      {/* ================= CULTURA & VALORES ================= */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Equipe trabalhando" 
                    className="rounded-2xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                />
            </FadeIn>

            <div className="space-y-8">
                <FadeIn direction="left">
                    <h2 className="text-3xl font-bold text-white mb-6">O "Jeito Zentri" de fazer</h2>
                    
                    <div className="space-y-6">
                        <ValueItem 
                            icon={<Target size={24}/>}
                            title="Dados acima do Ego"
                            desc="Não importa se achamos bonito. Importa se converte."
                        />
                        <ValueItem 
                            icon={<Zap size={24}/>}
                            title="Velocidade é Segurança"
                            desc="Entregamos com agilidade e iteramos rápido para achar o lucro."
                        />
                        <ValueItem 
                            icon={<Users size={24}/>}
                            title="Transparência Radical"
                            desc="Você sempre saberá onde cada centavo do seu investimento está indo."
                        />
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* ================= QUEM FAZ ACONTECER ================= */}
      <section className="py-24 bg-black relative">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <FadeIn className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Quem faz acontecer</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* RENAN CORDEIRO */}
                <TeamMember 
                    img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                    name="Renan Cordeiro"
                    role="Head of Design"
                    bio="Designer formado com mais de 5 anos de experiência liderando projetos visuais de alto impacto."
                />
                
                {/* SÓCIA MARKETING */}
                <TeamMember 
                    img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                    name="Nome da Sócia"
                    role="Head of Marketing"
                    bio="Especialista formada em Marketing, atuando há mais de 5 anos com estratégias de crescimento e mercado."
                />
            </div>
         </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="py-20 text-center border-t border-zentri-muted/30">
        <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-6">Vamos conversar?</h2>
            <div className="flex justify-center gap-4">
                <Button to="/contact">Agendar Reunião</Button>
            </div>
        </FadeIn>
      </section>

    </div>
  );
};

// --- SUB-COMPONENTES ---

const StatItem = ({ number, label }) => (
    <div className="group">
        <span className="block text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:text-zentri-main transition-colors">{number}</span>
        <span className="text-sm text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
);

const ValueItem = ({ icon, title, desc }) => (
    <div className="flex gap-4">
        <div className="w-12 h-12 rounded-lg bg-zentri-main/10 text-zentri-main flex items-center justify-center shrink-0 border border-zentri-main/20">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

const TeamMember = ({ img, name, role, bio }) => (
    <FadeIn className="bg-zentri-card p-6 rounded-2xl border border-white/5 hover:border-zentri-main/50 transition-all group text-left flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
            <img src={img} alt={name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div>
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <span className="text-zentri-main text-sm font-bold uppercase tracking-wider mb-3 block">{role}</span>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">"{bio}"</p>
            <div className="flex gap-3">
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={18}/></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={18}/></a>
            </div>
        </div>
    </FadeIn>
);

export default About;