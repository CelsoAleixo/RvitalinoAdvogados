import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { QuoteBand } from "@/components/shared/QuoteBand";
import { CTASection } from "@/components/shared/CTASection";
import { ManifestoModal } from "@/components/shared/ManifestoModal";
import { TrustIndicators } from "@/components/shared/TrustIndicators";
import { ResponsiveHeroVideo } from "@/components/shared/ResponsiveHeroVideo";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, Scale, Users, Building2, Globe, CheckCircle, Phone, BookOpen, Briefcase, ChevronDown, MapPin, History } from "lucide-react";
import institutionalVideo from "@/assets/institutional-video.mp4";
import { getPublicationsSortedByDate } from "@/data/publications";

// Import area images
import direitoEmpresarialImg from "@/assets/areas/direito-empresarial-hero.jpg";
import negociacaoJuridicaImg from "@/assets/areas/negociacao-juridica-hero.jpg";
import recuperacaoJudicialImg from "@/assets/areas/recuperacao-judicial-hero.jpg";
import direitoTributarioImg from "@/assets/areas/direito-tributario-hero.jpg";
import direitoTrabalhistaImg from "@/assets/areas/direito-trabalhista-hero.jpg";
import familiaSucessoesImg from "@/assets/areas/familia-sucessoes-hero.jpg";
import direitoCivilImg from "@/assets/areas/direito-civil-hero.jpg";
import creditoCarbonoImg from "@/assets/areas/credito-carbono-hero.jpg";

const WHATSAPP_LINK = "https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";

const areas = [
  { icon: Building2, title: "Direito Empresarial", description: "Assessoria completa para empresas em questões societárias, contratuais e estratégicas.", href: "/atuacao/direito-empresarial", image: direitoEmpresarialImg },
  { icon: Scale, title: "Negociação Jurídica", description: "Soluções eficazes em mediação e negociação de conflitos empresariais.", href: "/atuacao/negociacao-juridica", image: negociacaoJuridicaImg },
  { icon: Briefcase, title: "Recuperação Judicial", description: "Atuação ampla com destaque para transporte público e agronegócio.", href: "/atuacao/recuperacao-judicial", highlight: true, image: recuperacaoJudicialImg },
  { icon: Scale, title: "Direito Tributário", description: "Planejamento e defesa em questões fiscais e tributárias.", href: "/atuacao/direito-tributario", image: direitoTributarioImg },
];

const diferenciais = [{
  icon: Scale,
  title: "Especialização",
  description: "Nosso escritório atua fortemente em Direito Empresarial e Corporativo, unindo segurança técnica e visão estratégica. Compreendemos as necessidades de cada cliente e transformamos desafios em soluções práticas e sustentáveis."
}, {
  icon: Users,
  title: "Excelência",
  description: "Somos referência em soluções jurídicas, conduzindo processos com excelência, elaborando estratégias consistentes e negociando com segurança para garantir que nossos clientes superem desafios com tranquilidade."
}];

const clientesInternacionais = ["Proview Electronics Co Ltd – Taipei / Taiwan", "RED International Group – Taipei / Taiwan", "Proview LED Lighting Co. Ltd – Taipei / Taiwan", "New Era Investment Inc. – Panama / Panama", "Reit Investment Corp. – Panama / Panama", "North Capital Holding – Copenhagen / Denmark", "Dti Korea Co. Ltd – Coreia do Sul"];
const clientesNacionais = ["Transporte Público Urbano e Rodoviário: suporte jurídico a concessionárias em SP, PR, GO, AM, AC, RO, BA, RJ e SC.", "Mineração de Ferro e Manganês: assessoria a mineradoras no PA, AP e CE.", "Mineração de Granito e Pedras Preciosas: atuação junto a empresas na BA, MG e GO.", "Indústria de Alimentos e Restaurantes: apoio jurídico à produção de charque em GO e ao setor de alimentação em SP.", "Parcerias Público-Privadas (PPP): consultoria em projetos de iluminação pública em SP e SC."];
export default function Index() {
  const [isOfficeOpen, setIsOfficeOpen] = useState(false);
  const recentPublications = getPublicationsSortedByDate().slice(0, 3);

  return <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <ResponsiveHeroVideo
          mp4Src={institutionalVideo}
          posterImage="/lovable-uploads/3c2a2065-697e-4647-b72f-b5b713512bde.png"
          overlayClassName="bg-[#1a2e1a]/60 sm:bg-[#1a2e1a]/70"
          playbackRate={1.0}
          priority
        />

        <div className="container-site relative z-20 py-12 sm:py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-balance animate-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-overlay-strong">
              <span className="block text-accent drop-shadow-lg">Soluções legais confiáveis e eficazes</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-foreground animate-slide-up font-normal text-mobile-justified text-overlay-accessible">
              Assessoria jurídica empresarial com excelência e segurança.
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Button asChild size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto shadow-lg">
                <Link to="/contato" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contato
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-foreground/15 border-foreground/40 text-foreground hover:bg-foreground/25 font-medium w-full sm:w-auto shadow-lg">
                <Link to="/atuacao#areas-grid">Áreas de Atuação</Link>
              </Button>
            </div>

            <div className="mt-4 sm:mt-6">
              <ManifestoModal />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-background via-background/80 to-transparent pt-8 sm:pt-16 pb-4 sm:pb-8">
          <div className="container-site"></div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <TrustIndicators variant="light" />

      {/* Publications Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <SectionHeading title="Publicações" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {recentPublications.map((pub) => (
              <Link 
                key={pub.id} 
                to={`/publicacoes/${pub.slug}`}
                className="group bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{pub.category}</span>
                <h3 className="font-serif text-lg mt-2 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {pub.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{pub.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 text-accent text-sm font-medium">
                  <span>Ler mais</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/publicacoes" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Ver Todas as Publicações
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Areas of Practice Section */}
      <section className="section-padding">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <Briefcase className="h-6 w-6 text-accent" />
            </div>
            <SectionHeading title="Áreas de Atuação" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {areas.map((area, index) => (
              <Link 
                key={index} 
                to={area.href}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-card min-h-[280px]"
              >
                <div className="absolute inset-0">
                  <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-105 contrast-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {area.highlight && (
                  <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Destaque
                  </div>
                )}

                <div className="relative z-10 p-6 min-h-[280px] flex flex-col justify-end">
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/90 backdrop-blur-sm shadow-lg">
                      <area.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-foreground mb-2 transition-colors duration-300 group-hover:text-accent drop-shadow-lg">
                    {area.title}
                  </h3>
                  
                  <p className="text-foreground/90 text-sm leading-relaxed mb-4 line-clamp-2 drop-shadow-md">
                    {area.description}
                  </p>

                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    <span>Saiba mais</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/atuacao" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Ver Todas as Áreas de Atuação
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About the Firm Section with Expandable Office */}
      <section className="section-padding bg-secondary">
        <div className="container-site">
          <SectionHeading title="Sobre Nós" subtitle="Conheça nossa história e valores" />
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-mobile-only-justified">
                  Fundado no ano de 2008 pelo sócio fundador Rodrigo Vitalino, o escritório Rodrigo Vitalino Advogados
                  desenvolve uma assessoria jurídica e consultoria empresarial de forma prática e eficiente ao cliente.
                </p>
                <p className="text-mobile-only-justified">
                  Contamos com uma equipe de profissionais em diversas áreas auxiliando as empresas na gestão de forma
                  preventiva e no contencioso buscando melhores resultados com transparência e segurança Jurídica.
                </p>
                <p className="text-mobile-only-justified">
                  Atuamos também em Portugal, onde o Advogado Rodrigo Vitalino possui inscrição na Ordem dos Advogados.  
                </p>
              </div>

              {/* Expandable Office Section */}
              <Collapsible open={isOfficeOpen} onOpenChange={setIsOfficeOpen} className="mt-8">
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between group border-accent/30 hover:border-accent hover:bg-accent/5"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="font-medium">Nosso Escritório</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-accent transition-transform duration-300 ${isOfficeOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="bg-card rounded-xl p-6 border border-border space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <History className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-semibold mb-2">Nossa História</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Rodrigo Vitalino Advogados vem construindo uma atuação sólida no cenário jurídico e empresarial. 
                          O escritório nasceu com a missão de oferecer soluções jurídicas estratégicas e consultoria empresarial 
                          voltada para resultados práticos e sustentáveis.
                        </p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/d8c139b1-7ccc-4be4-8400-a2fc92806d89.png" 
                        alt="Sala de reuniões do escritório"
                        className="w-full h-48 object-cover"
                      />
                    </div>

                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/escritorio" className="flex items-center justify-center gap-2">
                        Conheça o Escritório Completo
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Button asChild variant="outline" className="mt-6">
                <Link to="/equipe">
                  Conheça a Equipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Valores */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif text-2xl mb-6">Filosofia e Valores</h3>
              <ul className="space-y-3">
                {["Ética e seriedade na aplicação do Direito", "Soluções jurídicas personalizadas e eficientes", "Confiabilidade e bom relacionamento com nossos clientes", "Conhecimento, competência e aperfeiçoamento técnico", "Foco nas necessidades do cliente", "Comprometimento com os princípios legais", "Transparência sobre os riscos de ações ou projetos", "Empreendedorismo"].map((valor, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{valor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeading title="Nossos Diferenciais" subtitle="O que nos torna únicos na prestação de serviços jurídicos" centered />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {diferenciais.map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border card-hover">
                <item.icon className="h-10 w-10 text-accent mb-6" />
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site">
          <SectionHeading title="Clientes Atendidos" subtitle="Experiência comprovada com empresas nacionais e internacionais" />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Nacional */}
            <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-serif text-xl">Companhias Nacionais</h4>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                {clientesNacionais.map((cliente, index) => (
                  <li key={index} className="border-l-2 border-accent pl-4">
                    {cliente}
                  </li>
                ))}
              </ul>
            </div>

            {/* Internacional */}
            <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-serif text-xl">Companhias Internacionais</h4>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                {clientesInternacionais.map((cliente, index) => (
                  <li key={index} className="border-l-2 border-accent pl-4">
                    {cliente}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <QuoteBand quote="A injustiça em qualquer lugar é uma ameaça à justiça por toda parte." author="Martin Luther King Jr." />

      {/* CTA */}
      <CTASection />
    </Layout>;
}