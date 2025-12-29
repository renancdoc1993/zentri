import React from 'react';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import Typewriter from '../components/Typerwriter';
import { 
  Palette,       
  MonitorSmartphone, 
  Rocket,        
  Layers,        
  Code2,         
  MousePointer2,  
  ArrowRight,
  CheckCircle2,
  Layout,
  Star
} from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center text pt-32 pb-40 px-4 border-b border-zentri-muted/50 overflow-hidden">
        
        {/* Background Tecnológico */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-zentri-main opacity-10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
            
            <FadeIn direction="down">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zentri-main/30 bg-zentri-main/5 text-zentri-main text-xs font-bold tracking-widest uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-zentri-main animate-pulse"></span>
                Agência Híbrida: Design + Performance
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              {/* min-h garante que a altura não pule enquanto digita */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-8 leading-tight min-h-[1.2em]">
                Não crie apenas tráfego.<br />
                <span className="text-gray-400">Crie </span>
                {/* EFEITO DE DIGITAÇÃO */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zentri-main to-emerald-400">
                    <Typewriter text="Experiências." speed={120} delay={0.8} />
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                A ponte definitiva entre <strong>UX Design de elite</strong> e estratégias de <strong>Mídia Paga</strong> que convertem.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button to="/projects" className="w-full sm:w-auto px-10 py-5 text-lg shadow-[0_0_40px_rgba(0,220,130,0.3)] hover:shadow-[0_0_60px_rgba(0,220,130,0.5)]">
                    <Layout className="mr-2" size={20}/>
                    Ver Nossos Projetos
                </Button>
                
                <Button to="/contact" variant="outline" className="w-full sm:w-auto px-10 py-5 text-lg">
                    Agendar Reunião
                </Button>
              </div>
            </FadeIn>

             <FadeIn direction="up" delay={0.6} className="mt-24 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 font-medium text-sm md:text-base">
                <span className="flex items-center gap-2 hover:text-white transition-colors"><CheckCircle2 size={18} className="text-zentri-main"/> User Experience (UX)</span>
                <span className="flex items-center gap-2 hover:text-white transition-colors"><CheckCircle2 size={18} className="text-zentri-main"/> User Interface (UI)</span>
                <span className="flex items-center gap-2 hover:text-white transition-colors"><CheckCircle2 size={18} className="text-zentri-main"/> Web Development</span>
                <span className="flex items-center gap-2 hover:text-white transition-colors"><CheckCircle2 size={18} className="text-zentri-main"/> Performance Ads</span>
            </FadeIn>
        </div>
      </section>


      {/* ================= SEÇÃO DE SERVIÇOS ================= */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
            <FadeIn className="text-center mb-24">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Design Estratégico & Tráfego</h2>
                <p className="text-zentri-text max-w-2xl mx-auto opacity-70 text-lg">
                    A maioria das agências só olha para os anúncios. Nós olhamos para a jornada completa: da identidade visual até o clique da compra.
                </p>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FadeIn delay={0.1}>
                    <FeatureCard 
                        icon={<Palette className="text-zentri-main" size={32} />}
                        title="UI & Branding"
                        desc="Criamos identidades visuais que transmitem autoridade e interfaces (UI) que encantam o usuário à primeira vista."
                    />
                </FadeIn>

                <FadeIn delay={0.2}>
                    <FeatureCard 
                        icon={<MonitorSmartphone className="text-zentri-main" size={32} />}
                        title="Web Design & Dev"
                        desc="Sites desenvolvidos em React e tecnologias modernas. Rápidos, responsivos e preparados para SEO."
                    />
                </FadeIn>

                <FadeIn delay={0.3}>
                    <FeatureCard 
                        icon={<Layers className="text-zentri-main" size={32} />}
                        title="UX Research"
                        desc="Mapeamos a jornada do seu cliente para eliminar fricções e aumentar a taxa de conversão das suas páginas."
                    />
                </FadeIn>

                <FadeIn delay={0.4}>
                    <FeatureCard 
                        icon={<Rocket className="text-zentri-main" size={32} />}
                        title="Gestão de Tráfego"
                        desc="Campanhas de alta performance no Google e Meta Ads, agora direcionadas para páginas visualmente perfeitas."
                    />
                </FadeIn>

                <FadeIn delay={0.5}>
                    <FeatureCard 
                        icon={<MousePointer2 className="text-zentri-main" size={32} />}
                        title="CRO (Otimização)"
                        desc="Design orientado a dados. Usamos mapas de calor e testes A/B para melhorar o design continuamente."
                    />
                </FadeIn>

                <FadeIn delay={0.6}>
                    <FeatureCard 
                        icon={<Code2 className="text-zentri-main" size={32} />}
                        title="Soluções No-Code"
                        desc="Agilidade na entrega com Webflow ou Framer quando seu projeto precisa estar no ar 'para ontem'."
                    />
                </FadeIn>
            </div>
        </div>
      </section>

      {/* ================= PROCESSO VISUAL ================= */}
      <section className="py-32 text border-y border-zentri-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right">
                <div className="relative group cursor-pointer">
                    <div className="absolute -inset-4 bg-gradient-to-r from-zentri-main to-purple-600 opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-500"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000" 
                        alt="Processo de UX Design" 
                        className="relative rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-black p-6 rounded-xl border border-zentri-muted shadow-2xl max-w-xs">
                        <p className="text-zentri-main font-bold mb-1">Processo Integrado</p>
                        <p className="text-white text-sm">Design e Mídia sentados na mesma mesa.</p>
                    </div>
                </div>
            </FadeIn>

            <FadeIn direction="left">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    A beleza importa.<br/>
                    {/* TÍTULO COM GRADIENTE CORRIGIDO */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zentri-main to-emerald-400">
                        Mas o resultado importa mais.
                    </span>
                </h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    Muitas empresas falham porque investem em mídia jogando pessoas para um site confuso e feio. Ou têm um site lindo que ninguém visita.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    Na Zentri, corrigimos essa desconexão. Projetamos a experiência completa para garantir que o investimento em mídia retorne como lucro.
                </p>
                
                <ul className="space-y-4">
                    {[
                        "Diagnóstico de UX/UI do seu site atual",
                        "Redesign focado em conversão",
                        "Implementação de campanhas de tráfego"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center space-x-3 text-white font-medium">
                            <div className="w-6 h-6 rounded-full bg-zentri-main/20 flex items-center justify-center text-zentri-main text-xs">✓</div>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <Button to="/contact" className="mt-10">Agendar Diagnóstico Visual</Button>
            </FadeIn>

        </div>
      </section>

      {/* ================= DEPOIMENTOS ================= */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Glow de Fundo Sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zentri-main opacity-5 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <FadeIn className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Parceiros que <span className="text-zentri-main">escalaram</span> conosco
                </h2>
                <p className="text-zentri-text max-w-2xl mx-auto opacity-70 text-lg">
                    Resultados reais de quem confiou na metodologia híbrida da Zentri.
                </p>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Depoimento 1 */}
                <FadeIn delay={0.1}>
                   <div className="text p-10 rounded-3xl border border-zentri-muted hover:border-zentri-main/50 transition-colors h-full flex flex-col relative group">
                      <span className="absolute top-6 right-8 text-6xl text-zentri-muted opacity-20 font-serif group-hover:text-zentri-main group-hover:opacity-100 transition-all duration-500">"</span>
                      
                      <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map(star => (
                            <Star key={star} size={18} className="text-zentri-main fill-zentri-main" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-8 flex-grow leading-relaxed text-lg">
                        "A Zentri não só melhorou nosso tráfego, mas refez toda a jornada de compra do site. O resultado foi um aumento de <strong className="text-white">3x no faturamento</strong> em 4 meses."
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden border border-white/10">
                          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Cliente 1" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                          <p className="text-white font-bold">Roberto Alves</p>
                          <p className="text-zentri-text text-xs uppercase tracking-wider">CEO, FinTech One</p>
                        </div>
                      </div>
                   </div>
                </FadeIn>

                {/* Depoimento 2 */}
                <FadeIn delay={0.3}>
                   <div className="text p-10 rounded-3xl border border-zentri-muted hover:border-zentri-main/50 transition-colors h-full flex flex-col relative group">
                      <span className="absolute top-6 right-8 text-6xl text-zentri-muted opacity-20 font-serif group-hover:text-zentri-main group-hover:opacity-100 transition-all duration-500">"</span>
                      
                      <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map(star => (
                            <Star key={star} size={18} className="text-zentri-main fill-zentri-main" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-8 flex-grow leading-relaxed text-lg">
                        "Estávamos cansados de agências que só entregavam relatórios bonitos. A equipe da Zentri é técnica, focada em ROI e o design que eles entregam é <strong className="text-white">impecável</strong>."
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden border border-white/10">
                          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Cliente 2" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                          <p className="text-white font-bold">Carla Mendes</p>
                          <p className="text-zentri-text text-xs uppercase tracking-wider">CMO, Urban Style</p>
                        </div>
                      </div>
                   </div>
                </FadeIn>

                {/* Depoimento 3 */}
                <FadeIn delay={0.5}>
                   <div className="text p-10 rounded-3xl border border-zentri-muted hover:border-zentri-main/50 transition-colors h-full flex flex-col relative group">
                      <span className="absolute top-6 right-8 text-6xl text-zentri-muted opacity-20 font-serif group-hover:text-zentri-main group-hover:opacity-100 transition-all duration-500">"</span>
                      
                      <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map(star => (
                            <Star key={star} size={18} className="text-zentri-main fill-zentri-main" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-8 flex-grow leading-relaxed text-lg">
                        "Contratamos para o tráfego, mas o redesign da nossa Landing Page foi o que virou o jogo. A taxa de conversão subiu de 2% para 7% em <strong className="text-white">uma semana</strong>."
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden border border-white/10">
                          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" alt="Cliente 3" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                          <p className="text-white font-bold">Marcos Diniz</p>
                          <p className="text-zentri-text text-xs uppercase tracking-wider">Fundador, SaaS Hub</p>
                        </div>
                      </div>
                   </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="py-32 relative text-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zentri-main/10 via-black to-black"></div>
        
        <FadeIn direction="up" className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                Seu projeto merece um <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Upgrade Visual</span>
            </h2>
            <p className="text-xl text-zentri-text opacity-70 mb-10">
                Vamos criar algo que seus clientes vão amar usar e seus concorrentes vão querer copiar.
            </p>
            <div className="flex justify-center gap-4">
               <Button to="/projects" className="px-10 py-4 text-lg bg-white text-black hover:bg-zentri-main hover:text-black">
                  Ver Portfólio <ArrowRight className="ml-2"/>
               </Button>
            </div>
        </FadeIn>
      </section>

    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="group p-8 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-zentri-main/50 rounded-2xl transition-all duration-300">
        <div className="mb-6 p-3 bg-black rounded-lg w-fit group-hover:scale-110 transition-transform duration-300 border border-white/10">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zentri-main transition-colors">{title}</h3>
        <p className="text-zentri-text opacity-60 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default Home;