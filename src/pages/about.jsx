import React from 'react';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import Typewriter from '../components/Typerwriter'; 
import { 
  Target, 
  Users, 
  Zap, 
  Linkedin, 
  Instagram
} from 'lucide-react';

// Importação dos Assets
import renanImg from '../assets/renan.jpg';
import nathaliaImg from '../assets/nathalia.jpg';

// --- DADOS (Separação de conteúdo e estrutura) ---
const STATS_DATA = [
  { id: 1, number: "+50", label: "Projetos Entregues" },
  { id: 2, number: "+10M", label: "Ads Gerenciados" },
  { id: 3, number: "3x", label: "ROI Médio" },
  { id: 4, number: "24/7", label: "Suporte Dedicado" },
];

const VALUES_DATA = [
  { 
    id: 1, 
    icon: <Target size={24}/>, 
    title: "Dados acima do Ego", 
    desc: "Não importa se achamos bonito. Importa se converte." 
  },
  { 
    id: 2, 
    icon: <Zap size={24}/>, 
    title: "Velocidade é Segurança", 
    desc: "Entregamos com agilidade e iteramos rápido para achar o lucro." 
  },
  { 
    id: 3, 
    icon: <Users size={24}/>, 
    title: "Transparência Radical", 
    desc: "Você sempre saberá onde cada centavo do seu investimento está indo." 
  },
];

const TEAM_DATA = [
  {
    id: 1,
    img: renanImg,
    name: "Renan Cordeiro",
    role: "Head of Design",
    bio: "Designer formado com mais de 5 anos de experiência liderando projetos visuais de alto impacto.",
    social: { linkedin: "#", instagram: "#" }
  },
  {
    id: 2,
    img: nathaliaImg,
    name: "Nathalia Dias",
    role: "Head of Marketing",
    bio: "Especialista formada em Marketing, atuando há mais de 5 anos com estratégias de crescimento e mercado.",
    social: { linkedin: "#", instagram: "#" }
  }
];

const About = () => {
  return (
    // <main> é semanticamente correto para o conteúdo principal da página
    <main className="text min-h-screen overflow-hidden">
      
      {/* ================= HERO: MANIFESTO ================= */}
      <section aria-label="Manifesto da Marca" className="pt-32 pb-20 px-4 relative border-b border-zentri-muted/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-zentri-main opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeIn>
                <span className="text-zentri-main font-bold tracking-widest uppercase text-xs mb-4 block">Nossa Essência</span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight min-h-[3em] md:min-h-0">
                    Design de Elite. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zentri-main to-emerald-400">
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
      <section aria-label="Estatísticas" className="py-12 border-b border-zentri-muted/30 bg-white/5">
        {/* Uso de DL (Definition List) é ideal para pares de Chave/Valor */}
        <div className="max-w-7xl mx-auto px-4">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {STATS_DATA.map((stat) => (
                    <div key={stat.id} className="group">
                        <dt className="sr-only">Estatística: {stat.label}</dt> {/* Acessibilidade */}
                        <dd className="block text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:text-zentri-main transition-colors">
                            {stat.number}
                        </dd>
                        <dd className="text-sm text-gray-500 uppercase tracking-widest">
                            {stat.label}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
      </section>

      {/* ================= CULTURA & VALORES ================= */}
      <section aria-label="Nossos Valores" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
                <figure>
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                        alt="Equipe Zentri reunida trabalhando em escritório moderno" 
                        className="rounded-2xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 w-full h-auto"
                    />
                </figure>
            </FadeIn>

            <div className="space-y-8">
                <FadeIn direction="left">
                    <h2 className="text-3xl font-bold text-white mb-6">O "Jeito Zentri" de fazer</h2>
                    {/* Lista não ordenada para os valores */}
                    <ul className="space-y-6">
                        {VALUES_DATA.map((value) => (
                            <li key={value.id}>
                                <ValueItem 
                                    icon={value.icon}
                                    title={value.title}
                                    desc={value.desc}
                                />
                            </li>
                        ))}
                    </ul>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* ================= QUEM FAZ ACONTECER ================= */}
      <section aria-label="Nosso Time" className="py-24 bg-black relative">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <FadeIn className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Quem faz acontecer</h2>
            </FadeIn>

            {/* Lista de membros do time */}
            <ul className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {TEAM_DATA.map((member) => (
                    <li key={member.id}>
                        <TeamMember {...member} />
                    </li>
                ))}
            </ul>
         </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section aria-label="Chamada para Ação" className="py-20 text-center border-t border-zentri-muted/30">
        <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-6">Vamos conversar?</h2>
            <div className="flex justify-center gap-4">
                <Button to="/contact">Agendar Reunião</Button>
            </div>
        </FadeIn>
      </section>
    </main>
  );
};

// --- SUB-COMPONENTES OTIMIZADOS ---

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

// Uso de <article> pois cada membro é um conteúdo independente
const TeamMember = ({ img, name, role, bio, social }) => (
    <FadeIn className="h-full">
        <article className="bg-zentri-card p-6 rounded-2xl border border-white/5 hover:border-zentri-main/50 transition-all group text-left flex flex-col sm:flex-row gap-6 items-center sm:items-start h-full">
            <figure className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                <img 
                    src={img} 
                    alt={`Foto de ${name}`} 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" 
                />
            </figure>
            <div>
                <header>
                    <h3 className="text-2xl font-bold text-white">{name}</h3>
                    <span className="text-zentri-main text-sm font-bold uppercase tracking-wider mb-3 block">{role}</span>
                </header>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">"{bio}"</p>
                
                <footer className="flex gap-3">
                    <a 
                        href={social.linkedin} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-gray-500 hover:text-white transition-colors"
                        aria-label={`Linkedin de ${name}`}
                    >
                        <Linkedin size={18}/>
                    </a>
                    <a 
                        href={social.instagram} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-gray-500 hover:text-white transition-colors"
                        aria-label={`Instagram de ${name}`}
                    >
                        <Instagram size={18}/>
                    </a>
                </footer>
            </div>
        </article>
    </FadeIn>
);

export default About;