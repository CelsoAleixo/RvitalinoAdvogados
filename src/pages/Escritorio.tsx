import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { CheckCircle, History, Heart, Scale, Award, Users, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import escritorioHero from "@/assets/escritorio-hero.png";
import escritorioSala from "@/assets/escritorio-sala.png";
const valores = ["Ética e seriedade na aplicação do Direito", "Soluções jurídicas personalizadas e eficientes", "Confiabilidade e bom relacionamento com nossos clientes", "Conhecimento, competência e aperfeiçoamento técnico", "Foco nas necessidades do cliente", "Comprometimento com os princípios legais", "Transparência sobre os riscos de ações ou projetos", "Empreendedorismo"];
const diferenciais = [{
  icon: Award,
  title: "Excelência Jurídica",
  description: "Mais de 17 anos de experiência em soluções jurídicas estratégicas"
}, {
  icon: Users,
  title: "Equipe Especializada",
  description: "Profissionais qualificados em diversas áreas do direito"
}, {
  icon: MapPin,
  title: "Atuação Internacional",
  description: "Presença no Brasil e Portugal com expertise em direito internacional"
}];
export default function Escritorio() {
  return <Layout>
      {/* Premium Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image - full width, high quality */}
        <div className="absolute inset-0 bg-[#0d1a0d] overflow-hidden">
          <img src={escritorioHero} alt="Escritório Rodrigo Vitalino Advogados" className="w-full h-full object-cover object-center image-enhance-strong" />
          {/* Lighter overlays for more image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a0d]/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0d]/15 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/30" />

        {/* Content */}
        <div className="container-site relative z-10">
          <div className="max-w-xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8 animate-fade-in">
              <Link to="/" className="text-white/80 hover:text-accent transition-colors drop-shadow-md">
                Início
              </Link>
              <span className="text-white/60 drop-shadow-md">/</span>
              <span className="text-accent font-medium drop-shadow-md">O Escritório</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 mb-6 backdrop-blur-sm animate-fade-in">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-semibold">Desde 2008</span>
            </div>

            {/* Title - enhanced with text shadow for sharpness */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
          }}>
              O Escritório
            </h1>

            {/* Description - more readable */}
            <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-md animate-slide-up" style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.4)'
          }}>
              Excelência jurídica e compromisso com resultados.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 md:gap-12 animate-slide-up">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent drop-shadow-lg">17+</div>
                <div className="text-white/80 text-sm mt-1 drop-shadow-md">Anos de<br />Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent drop-shadow-lg">500+</div>
                <div className="text-white/80 text-sm mt-1 drop-shadow-md">Clientes<br />Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent drop-shadow-lg">27</div>
                <div className="text-white/80 text-sm mt-1 drop-shadow-md">Países de<br />Atuação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button onClick={() => {
        const element = document.getElementById("nossa-historia");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer hover:opacity-80 transition-opacity" aria-label="Rolar para Nossa História">
          <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 bg-[#ede8de]/0 border-accent">
            <div className="w-1.5 h-3 bg-accent rounded-full" />
          </div>
        </button>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-16 bg-secondary border-y border-border scroll-mt-20">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            {diferenciais.map((item, index) => <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border hover:border-accent/30 transition-all duration-300">
                <div className="p-3 rounded-lg bg-accent/10">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* História Section */}
      <section id="nossa-historia" className="section-padding scroll-mt-20">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <History className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Nossa História</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Fundado no ano de 2008 pelo sócio fundador Rodrigo Vitalino, o escritório 
                  Rodrigo Vitalino Advogados desenvolve uma assessoria jurídica e consultoria 
                  empresarial de forma prática e eficiente ao cliente.
                </p>
                <p>
                  Contamos com uma equipe de profissionais em diversas áreas auxiliando as 
                  empresas na gestão de forma preventiva e no contencioso buscando melhores 
                  resultados com transparência e segurança Jurídica.
                </p>
                <p>
                  Atuamos também em Portugal, onde o Advogado Rodrigo Vitalino possui 
                  inscrição na Ordem dos Advogados de Portugal.
                </p>
              </div>
              
              <Link to="/portugal" className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent/80 font-medium transition-colors group">
                Conheça nossa atuação em Portugal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Sala de reuniões do escritório Rodrigo Vitalino Advogados" className="w-full h-auto object-cover" src="/lovable-uploads/d8c139b1-7ccc-4be4-8400-a2fc92806d89.png" />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -left-4 bg-accent text-white px-6 py-3 rounded-lg shadow-lg">
                <div className="text-2xl font-serif font-bold">2008</div>
                <div className="text-xs uppercase tracking-wider">Fundação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="section-padding bg-[#1a2e1a]">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Nossos Princípios</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Valores que nos Guiam
            </h2>
            <p className="text-[#f7f4ed]/70 max-w-2xl mx-auto">
              Princípios fundamentais que orientam nossa atuação e relacionamento com cada cliente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {valores.map((valor, index) => <div key={index} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-accent/30 transition-all duration-300">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-[#f7f4ed] text-sm leading-relaxed">{valor}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Atendimento Section */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Atendimento Personalizado
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O atendimento ao cliente oferecido pelo nosso escritório será sempre por um 
              profissional da área do direito que o cliente estiver necessitando, sempre que 
              possível atendimento pessoal para saneamento e esclarecimento de dúvidas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-secondary rounded-full text-sm text-foreground">
                📞 Atendimento Presencial
              </div>
              <div className="px-6 py-3 bg-secondary rounded-full text-sm text-foreground">
                💬 Consultoria Online
              </div>
              <div className="px-6 py-3 bg-secondary rounded-full text-sm text-foreground">
                📧 Suporte por E-mail
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advogados Section */}
      <section className="section-padding bg-secondary">
        <div className="container-site my-0">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Nossa Equipe</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advogados
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profissionais dedicados e experientes prontos para atender suas necessidades jurídicas
            </p>
          </div>
          
          {/* Primeira linha - 2 advogados */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Rodrigo Vitalino */}
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 text-center group">
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300 shadow-xl">
                <img alt="Rodrigo Vitalino - Sócio Fundador" className="w-full h-full object-cover" src="/lovable-uploads/d699caab-0157-4f29-ab67-c28d2b8cdcd7.png" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-1">Rodrigo Vitalino</h3>
              <p className="text-accent font-medium mb-4">Sócio Fundador</p>
              <div className="space-y-2 text-sm">
                <a href="mailto:rodrigo@rvitalinoadvogados.com.br" className="block text-muted-foreground hover:text-accent transition-colors">
                  rodrigo@rvitalinoadvogados.com.br
                </a>
              </div>
            </div>

            {/* Deidre */}
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 text-center group">
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300 shadow-xl">
                <img alt="Deidre Scaranello - Diretora Jurídica" className="w-full h-full object-cover" src="/lovable-uploads/deidre-scaranello-fixed.png" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-1">Deidre Scaranello</h3>
              <p className="text-accent font-medium mb-4">Diretora Jurídica</p>
              <div className="space-y-2 text-sm">
                <a href="mailto:deidre@rvitalinoadvogados.com.br" className="block text-muted-foreground hover:text-accent transition-colors">
                  deidre@rvitalinoadvogados.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Segunda linha - 3 advogados */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
            {/* Ana Caroline Ianuck */}
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 text-center group">
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300 shadow-xl">
                <img alt="Ana Caroline Ianuck - Adv. Empresarial Especialista em Recuperação Judicial" className="w-full h-full object-cover" src="/lovable-uploads/ana-caroline.png" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-1">Ana Caroline Ianuck</h3>
              <p className="text-accent font-medium mb-4">Adv. Empresarial – RJ</p>
              <div className="space-y-2 text-sm">
                <a href="mailto:ana.caroline@rvitalinoadvogados.com.br" className="block text-muted-foreground hover:text-accent transition-colors">
                  ana.caroline@rvitalinoadvogados.com.br
                </a>
              </div>
            </div>

            {/* Arthur Vitalino */}
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 text-center group">
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300 shadow-xl">
                <img alt="Arthur Vitalino - Representante União Europeia" className="w-full h-full object-cover" src="/lovable-uploads/arthur-vitalino.png" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-1">Arthur Vitalino</h3>
              <p className="text-accent font-medium mb-4">Representante União Europeia</p>
              <div className="space-y-2 text-sm">
                <a href="mailto:arthur@rvitalinoadvogados.com.br" className="block text-muted-foreground hover:text-accent transition-colors">
                  arthur@rvitalinoadvogados.com.br
                </a>
              </div>
            </div>

            {/* Elisandra Sousa Barbosa */}
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 text-center group">
              <div className="w-44 h-44 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300 shadow-xl">
                <img alt="Elisandra Sousa Barbosa - Coordenadora Administrativa Judicial" className="w-full h-full object-cover" src="/lovable-uploads/elisandra-sousa.png" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-1">Elisandra Sousa Barbosa</h3>
              <p className="text-accent font-medium mb-4">Adv. Administrativa – Judicial</p>
              <div className="space-y-2 text-xs">
                <a href="mailto:elisandra.sousa@rvitalinoadvogados.com.br" className="block text-muted-foreground hover:text-accent transition-colors truncate">
                  elisandra.sousa@rvitalinoadvogados.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>;
}