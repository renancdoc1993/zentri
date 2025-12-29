import React, { useState, useEffect, useCallback } from 'react';
import FadeIn from '../components/FadeIn';
import Typewriter from '../components/Typerwriter'; 
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Layers, 
  Layout, 
  Smartphone 
} from 'lucide-react';

// --- DADOS DOS PROJETOS (MANTIDOS INTEGRALMENTE) ---
const projectsData = [
  {
    id: 1,
    category: "App Mobile",
    title: "GlowUp - Beauty App",
    shortDesc: "Aplicativo de agendamento para salões de beleza unissex.",
    fullDesc: "O desafio era criar uma experiência unissex que não alienasse nenhum público. Utilizamos uma paleta neutra com toques de neon para modernidade. O fluxo de agendamento foi reduzido de 5 para 2 etapas.",
    tags: ["UI Design", "Figma", "Prototipagem"],
    gallery: [
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1000", 
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000", 
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
    ],
    link: "#"
  },
  {
    id: 2,
    category: "Web Design",
    title: "Fintech Dashboard",
    shortDesc: "Painel administrativo para controle financeiro empresarial.",
    fullDesc: "Focamos na visualização de dados (Data Viz). O cliente precisava ver o fluxo de caixa em tempo real. Criamos componentes de gráficos customizados e um modo escuro nativo para reduzir o cansaço visual.",
    tags: ["React", "Dashboard", "Data Viz"],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1555421689-49263377564e?auto=format&fit=crop&q=80&w=1000"
    ],
    link: "#"
  },
  {
    id: 3,
    category: "Branding",
    title: "Sicoob Redesign",
    shortDesc: "Proposta de modernização visual para materiais institucionais.",
    fullDesc: "Mantivemos a essência da marca mas trouxemos uma tipografia mais leve e um uso mais inteligente dos espaços em branco. O objetivo era transmitir transparência e tecnologia.",
    tags: ["Branding", "Identidade Visual", "Print"],
    gallery: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
    ],
    link: "#"
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Fecha o modal ao pressionar ESC
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setSelectedProject(null);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Trava o scroll do fundo
    } else {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, handleKeyDown]);

  return (
    <div className="text min-h-screen pt-32 pb-20 px-4">
      
      {/* CABEÇALHO (MANTIDO) */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <FadeIn>
            <span className="text-zentri-main font-bold tracking-widest uppercase text-xs mb-4 block">Portfólio</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight min-h-[3em] md:min-h-0">
                Transformamos ideias em <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zentri-main to-emerald-400">
                    <Typewriter text="Resultados Reais." speed={100} delay={0.5} />
                </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explore nosso processo criativo. Clique nos projetos para ver os detalhes.
            </p>
        </FadeIn>
      </div>

      {/* GRID DE PROJETOS (MANTIDO) */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
                <div 
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer bg-zentri-card rounded-2xl border border-white/5 overflow-hidden hover:border-zentri-main/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                        <img 
                            src={project.gallery[0]} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zentri-main transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                            {project.shortDesc}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-xs text-gray-500 font-mono">#{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeIn>
        ))}
      </div>

      {/* MODAL DA GALERIA (AJUSTADO PARA FECHAR NO FUNDO) */}
      {selectedProject && (
        <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    };

    return (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
          onClick={onClose} // Clique no fundo fecha o modal
        >
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2"
            >
                <X size={40} />
            </button>

            <div 
              className="text w-full max-w-6xl max-h-[90vh] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row bg-zentri-card"
              onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar no conteúdo
            >
                {/* LADO ESQUERDO: GALERIA */}
                <div className="lg:w-2/3 bg-black relative flex items-center justify-center group h-[40vh] lg:h-auto">
                    <img 
                        src={project.gallery[currentImageIndex]} 
                        alt={`Tela ${currentImageIndex + 1}`} 
                        className="max-w-full max-h-full object-contain"
                    />
                    
                    {project.gallery.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-zentri-main hover:text-black transition-all">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={nextImage} className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-zentri-main hover:text-black transition-all">
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}

                    <div className="absolute bottom-4 flex gap-2">
                        {project.gallery.map((_, idx) => (
                            <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-zentri-main w-6' : 'bg-white/30'}`} />
                        ))}
                    </div>
                </div>

                {/* LADO DIREITO: INFORMAÇÕES */}
                <div className="lg:w-1/3 p-8 lg:p-10 overflow-y-auto">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                        <span className="text-zentri-main text-sm font-bold tracking-wider uppercase">{project.category}</span>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-bold flex items-center gap-2 mb-2">
                                <Layout size={18} className="text-gray-500"/> Sobre o Projeto
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{project.fullDesc}</p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold flex items-center gap-2 mb-2">
                                <Layers size={18} className="text-gray-500"/> Tecnologias
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zentri-main font-bold hover:underline mt-4">
                            Ver Projeto Online <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;