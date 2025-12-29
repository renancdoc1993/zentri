import React from 'react';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import Typewriter from '../components/Typerwriter'; 
import heroServicesImg from '../assets/service.png'; 
import { 
  Palette, 
  MonitorSmartphone, 
  Rocket, 
  Search, 
  BarChart3, 
  MessageSquare, 
  CheckCircle2, 
  Workflow,
  Lightbulb,
  Zap,
  Smartphone
} from 'lucide-react';

const Services = () => {
  return (
    <div className="text min-h-screen overflow-hidden">
      
      {/* ================= HERO SECTION (CORRIGIDA) ================= */}
      <section className="pt-32 pb-20 px-4 border-b border-zentri-muted/50 relative">
         {/* Glow de Fundo */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zentri-main opacity-5 blur-[120px] rounded-full"></div>

         <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-center relative z-10">
            
            {/* Lado Esquerdo: Texto */}
            <FadeIn direction="right" className="lg:col-span-2">
                <span className="text-zentri-main font-bold tracking-widest uppercase text-xs mb-4 block">
                    Nossas Soluções
                </span>
                
                {/* 1. Removi o 'min-h-[3em]' que causava o buraco */}
                {/* 2. Reduzi a margem inferior de mb-6 para mb-4 */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                    Ecossistema Digital<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zentri-main to-emerald-400">
                        <Typewriter text="100% Integrado." speed={100} delay={0.5} />
                    </span>
                </h1>

                {/* 3. Texto agora é Branco (Gray-200) em vez de verde opaco */}
                <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-md">
                    Design de elite conectado à performance real. Do pixel ao lucro, sem pontas soltas.
                </p>

                <div className="flex gap-4">
                    <Button to="/contact">Orçamento</Button>
                    <Button to="/projects" variant="outline">Ver Cases</Button>
                </div>
            </FadeIn>

            {/* Lado Direito: Imagem */}
            <FadeIn direction="left" delay={0.2} className="relative lg:col-span-3">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                    <img 
                        src={heroServicesImg} 
                        alt="Zentri Dashboard e Mobile" 
                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-[1.02] transform"
                    />
                    
                    {/* Badge Flutuante */}
                    <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-zentri-main/30 shadow-xl max-w-xs">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-zentri-main rounded-lg text-black">
                                <Smartphone size={20} />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Full Experience</p>
                                <p className="text-xs text-gray-400">Web, Mobile & Ads</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Elemento Decorativo atrás */}
                <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-gradient-to-tr from-zentri-main/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
            </FadeIn>
         </div>
      </section>

      {/* ================= GRUPO 1: DESIGN & TECNOLOGIA ================= */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <FadeIn>
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <Palette className="text-zentri-main" size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Design & Tech</h2>
                    <p className="text-gray-400 text-sm">A fundação do seu negócio.</p>
                </div>
            </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
                icon={<MonitorSmartphone size={32}/>}
                title="Web Design & Dev"
                description="Sites institucionais e LPs de alta conversão. Rápidos e seguros."
                features={["Layout Figma", "React/Next.js", "SEO Técnico", "Painel Admin"]}
            />
            <ServiceCard 
                icon={<Palette size={32}/>}
                title="Branding & UI"
                description="Marcas memoráveis e interfaces que geram confiança imediata."
                features={["Logo & ID Visual", "Brandbook", "Design System", "Protótipos"]}
            />
            <ServiceCard 
                icon={<Workflow size={32}/>}
                title="UX Research"
                description="Mapeamento de jornada e otimização de fluxo focado no usuário."
                features={["Testes de Uso", "Arquitetura", "Jornada do Usuário", "Análise Comp."]}
            />
        </div>
      </section>

      {/* ================= GRUPO 2: PERFORMANCE & ESCALA ================= */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-zentri-muted/30">
        <FadeIn>
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <Rocket className="text-zentri-main" size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Performance</h2>
                    <p className="text-gray-400 text-sm">Estratégias de escala e vendas.</p>
                </div>
            </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
                icon={<Rocket size={32}/>}
                title="Tráfego Pago"
                description="Gestão de anúncios (Meta/Google) com foco total em ROI."
                features={["Funis de Venda", "Criativos", "Copywriting", "Relatórios"]}
            />
            <ServiceCard 
                icon={<Search size={32}/>}
                title="SEO & Conteúdo"
                description="Posicionamento orgânico para ser encontrado sem pagar clique."
                features={["Otimização On-Page", "Blog Posts", "Link Building", "Google Meu Negócio"]}
            />
            <ServiceCard 
                icon={<BarChart3 size={32}/>}
                title="Dados & CRM"
                description="Recuperação de leads e análise de dados para aumentar LTV."
                features={["Setup CRM", "E-mail Mkt", "Dashboards BI", "Recuperação"]}
            />
        </div>
      </section>

      {/* ================= O PROCESSO ================= */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O Processo</h2>
                <p className="text-gray-400">Ágil, transparente e focado.</p>
            </FadeIn>

            <div className="grid md:grid-cols-4 gap-8 relative">
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-zentri-main/0 via-zentri-main/50 to-zentri-main/0 z-0"></div>

                <ProcessStep number="01" icon={<MessageSquare size={24} />} title="Descoberta" desc="Imersão no objetivo." />
                <ProcessStep number="02" icon={<Lightbulb size={24} />} title="Estratégia" desc="O plano de ação." />
                <ProcessStep number="03" icon={<Zap size={24} />} title="Execução" desc="Mão na massa." />
                <ProcessStep number="04" icon={<BarChart3 size={24} />} title="Otimização" desc="Ajustes e escala." />
            </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Dúvidas</h2>
        </FadeIn>
        
        <div className="space-y-4">
            <FaqItem 
                question="Design ou Desenvolvimento?" 
                answer="Full-Service. Criamos o UI no Figma e codamos em React ou No-Code (Webflow/Framer)."
            />
            <FaqItem 
                question="Formas de Pagamento?" 
                answer="Projetos pontuais (sites) com valor fixo e Fee mensal para gestão de tráfego."
            />
            <FaqItem 
                question="Prazo de Entrega?" 
                answer="LPs em ~10 dias. Sites completos ~30 dias."
            />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center border-t border-zentri-muted/30">
        <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-6">Vamos escalar?</h2>
            <div className="flex justify-center gap-4">
                <Button to="/contact">Solicitar Orçamento</Button>
            </div>
        </FadeIn>
      </section>
    </div>
  );
};

// --- Sub-componentes ---

const ServiceCard = ({ icon, title, description, features }) => (
    <FadeIn className="group bg-zentri-card p-8 rounded-3xl border border-zentri-muted hover:border-zentri-main hover:shadow-[0_0_30px_rgba(0,220,130,0.05)] transition-all duration-300">
        <div className="w-14 h-14 text rounded-2xl flex items-center justify-center text-zentri-main mb-6 border border-white/5 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-zentri-text opacity-70 mb-6 text-sm leading-relaxed min-h-[40px]">
            {description}
        </p>
        <div className="space-y-3 pt-6 border-t border-white/5">
            {features.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-zentri-main mt-1 shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                </div>
            ))}
        </div>
    </FadeIn>
);

const ProcessStep = ({ number, icon, title, desc }) => (
    <FadeIn className="relative z-10 text p-6 rounded-2xl border border-zentri-muted text-center hover:-translate-y-2 transition-transform duration-300">
        <div className="w-12 h-12 mx-auto bg-black rounded-full border border-zentri-main flex items-center justify-center text-zentri-main mb-4 shadow-[0_0_15px_rgba(0,220,130,0.2)]">
            {icon}
        </div>
        <span className="absolute top-4 right-4 text-4xl font-bold text-white/5">{number}</span>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
    </FadeIn>
);

const FaqItem = ({ question, answer }) => (
    <details className="group bg-zentri-card rounded-xl border border-zentri-muted overflow-hidden transition-all duration-300 open:border-zentri-main/50">
        <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white select-none">
            {question}
            <span className="text-zentri-main group-open:rotate-45 transition-transform">+</span>
        </summary>
        <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm">
            {answer}
        </div>
    </details>
);

export default Services;