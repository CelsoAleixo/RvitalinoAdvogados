import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { Link } from "react-router-dom";
import { Building2, Handshake, TrendingUp, Calculator, Briefcase, Heart, Scale, Leaf, ArrowRight, Award, Shield, Users } from "lucide-react";

// Import area images
import direitoEmpresarialImg from "@/assets/areas/direito-empresarial-hero.jpg";
import negociacaoJuridicaImg from "@/assets/areas/negociacao-juridica-hero.jpg";
import recuperacaoJudicialImg from "@/assets/areas/recuperacao-judicial-hero.jpg";
import direitoTributarioImg from "@/assets/areas/direito-tributario-hero.jpg";
import direitoTrabalhistaImg from "@/assets/areas/direito-trabalhista-hero.jpg";
import familiaSucessoesImg from "@/assets/areas/familia-sucessoes-hero.jpg";
import direitoCivilImg from "@/assets/areas/direito-civil-hero.jpg";
import creditoCarbonoImg from "@/assets/areas/credito-carbono-hero.jpg";
import logoHero from "@/assets/logo-hero-atuacao.png";
const areas = [{
  icon: Building2,
  title: "Direito Empresarial",
  description: "Assessoria completa para empresas em questões societárias, contratuais e estratégicas.",
  href: "/atuacao/direito-empresarial",
  highlight: false,
  image: direitoEmpresarialImg
}, {
  icon: Handshake,
  title: "Negociação Jurídica",
  description: "Soluções eficazes em mediação e negociação de conflitos empresariais.",
  href: "/atuacao/negociacao-juridica",
  highlight: false,
  image: negociacaoJuridicaImg
}, {
  icon: TrendingUp,
  title: "Recuperação Judicial",
  description: "Atuação ampla com destaque para transporte público e agronegócio.",
  href: "/atuacao/recuperacao-judicial",
  highlight: true,
  image: recuperacaoJudicialImg
}, {
  icon: Calculator,
  title: "Direito Tributário",
  description: "Planejamento e defesa em questões fiscais e tributárias.",
  href: "/atuacao/direito-tributario",
  highlight: false,
  image: direitoTributarioImg
}, {
  icon: Briefcase,
  title: "Direito Trabalhista",
  description: "Suporte completo em relações de trabalho e defesa empresarial.",
  href: "/atuacao/direito-trabalhista",
  highlight: false,
  image: direitoTrabalhistaImg
}, {
  icon: Heart,
  title: "Família e Sucessões",
  description: "Orientação em divórcios, inventários e planejamento sucessório.",
  href: "/atuacao/familia-e-sucessoes",
  highlight: false,
  image: familiaSucessoesImg
}, {
  icon: Scale,
  title: "Direito Civil",
  description: "Consultoria e defesa em contratos e responsabilidade civil.",
  href: "/atuacao/direito-civil",
  highlight: false,
  image: direitoCivilImg
}, {
  icon: Leaf,
  title: "Crédito de Carbono",
  description: "Assessoria em projetos sustentáveis e mercado de créditos de carbono.",
  href: "/atuacao/credito-de-carbono",
  highlight: true,
  image: creditoCarbonoImg
}];
const stats = [{
  number: "17+",
  label: "Anos de Experiência"
}, {
  number: "500+",
  label: "Clientes Atendidos"
}, {
  number: "8",
  label: "Áreas de Especialização"
}, {
  number: "100%",
  label: "Comprometimento"
}];
export default function Atuacao() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#areas-grid") {
      setTimeout(() => {
        const element = document.getElementById("areas-grid");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }, 100);
    }
  }, [location]);
  return <Layout>
      {/* Hero Section - Premium Design */}
      

      {/* Stats Section */}
      

      {/* Introduction Section */}
      

      {/* Areas Grid with Images */}
      <section id="areas-grid" className="py-24 bg-background scroll-mt-[-20px]">
        <div className="container-site">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4 block">
              Nossas Especialidades
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Conheça Nossas Áreas de Atuação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Cada área do Direito demanda conhecimento específico e experiência prática. 
              Explore nossas especialidades e descubra como podemos ajudá-lo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => <Link key={index} to={area.href} className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 image-enhance" />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${area.highlight ? 'bg-gradient-to-t from-[#1a2e1a]/95 via-[#1a2e1a]/80 to-[#1a2e1a]/60' : 'bg-gradient-to-t from-[#1a2e1a]/95 via-[#1a2e1a]/75 to-[#1a2e1a]/50 group-hover:from-[#1a2e1a]/98 group-hover:via-[#1a2e1a]/85'}`} />
                </div>

                {/* Highlight badge */}
                {area.highlight && <div className="absolute top-4 left-4 z-10 bg-accent text-[#1a2e1a] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Destaque
                  </div>}

                {/* Content */}
                <div className="relative z-10 p-8 min-h-[320px] flex flex-col justify-end">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${area.highlight ? 'bg-accent/30 group-hover:bg-accent/40' : 'bg-accent/20 group-hover:bg-accent/30'}`}>
                      <area.icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-3 transition-colors duration-300 group-hover:text-accent">
                    {area.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-5 line-clamp-3">
                    {area.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    <span>Saiba mais</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-[#1a2e1a] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        
        <div className="container-site relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-accent text-7xl font-serif mb-8 opacity-60">"</div>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-10 font-light">
              Nosso compromisso é oferecer soluções jurídicas que vão além da técnica, 
              construindo relações de confiança duradouras e resultados que fazem a diferença.
            </blockquote>
            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent/50" />
              <div className="text-center">
                <span className="text-accent font-semibold text-lg block">Rodrigo Vitalino</span>
                <span className="text-white/50 text-sm">Advogado Fundador</span>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-6 block">
                Por que nos escolher
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
                Excelência e Comprometimento em Cada Caso
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                Acreditamos que cada cliente é único e merece uma abordagem personalizada. 
                Nossa equipe combina expertise técnica com uma visão estratégica, garantindo 
                soluções eficazes e resultados consistentes.
              </p>
              
              <div className="space-y-5">
                {["Atendimento personalizado e dedicado", "Equipe multidisciplinar e experiente", "Estratégias jurídicas inovadoras", "Transparência em todas as etapas", "Resultados comprovados ao longo de 17 anos"].map((item, index) => <div key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground text-lg">{item}</span>
                  </div>)}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#1a2e1a] via-[#243824] to-[#1a2e1a] rounded-3xl p-10 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="relative mb-8">
                    <Scale className="h-28 w-28 text-accent mx-auto opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent/10 animate-pulse" />
                    </div>
                  </div>
                  <div className="font-serif text-6xl lg:text-7xl bg-gradient-to-r from-accent via-[#d4b65c] to-accent bg-clip-text text-transparent font-semibold mb-3">
                    2008
                  </div>
                  <div className="text-white/60 text-lg">Fundação do Escritório</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 border-2 border-accent/20 rounded-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection title="Precisa de assessoria jurídica especializada?" description="Entre em contato e conheça soluções jurídicas personalizadas para suas necessidades. Nossa equipe está pronta para ajudá-lo." />
    </Layout>;
}