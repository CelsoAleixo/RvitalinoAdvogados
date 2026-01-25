import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { QuoteBand } from "@/components/shared/QuoteBand";
import { CTASection } from "@/components/shared/CTASection";
import { ManifestoModal } from "@/components/shared/ManifestoModal";
import { TrustIndicators } from "@/components/shared/TrustIndicators";
import { ArrowRight, Scale, Users, Building2, Globe, CheckCircle, MessageCircle, Phone, Shield } from "lucide-react";
import detailPen from "@/assets/detail-pen.jpg";
import institutionalVideo from "@/assets/institutional-video.mp4";

const WHATSAPP_LINK = "https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";
const valores = ["Ética e seriedade na aplicação do Direito", "Soluções jurídicas personalizadas e eficientes", "Confiabilidade e bom relacionamento com nossos clientes", "Conhecimento, competência e aperfeiçoamento técnico", "Foco nas necessidades do cliente", "Comprometimento com os princípios legais", "Transparência sobre os riscos de ações ou projetos", "Empreendedorismo"];
const diferenciais = [{
  icon: Scale,
  title: "Especialização",
  description: "Nosso escritório atua fortemente em Direito Empresarial e Corporativo, unindo segurança técnica e visão estratégica. Compreendemos as necessidades de cada cliente e transformamos desafios em soluções práticas e sustentáveis."
}, {
  icon: Users,
  title: "Recuperação Judicial",
  description: "Somos referência em recuperação judicial, conduzindo processos com maestria, elaborando planos consistentes e negociando com credores para garantir que empresas superem dificuldades financeiras com segurança jurídica."
}];
const clientesInternacionais = ["Proview Electronics Co Ltd – Taipei / Taiwan", "RED International Group – Taipei / Taiwan", "Proview LED Lighting Co. Ltd – Taipei / Taiwan", "New Era Investment Inc. – Panama / Panama", "Reit Investment Corp. – Panama / Panama", "North Capital Holding – Copenhagen / Denmark", "Dti Korea Co. Ltd – Coreia do Sul"];
const clientesNacionais = ["Transporte Público Urbano e Rodoviário: suporte jurídico a concessionárias em SP, PR, GO, AM, AC, RO, BA, RJ e SC.", "Mineração de Ferro e Manganês: assessoria a mineradoras no PA, AP e CE.", "Mineração de Granito e Pedras Preciosas: atuação junto a empresas na BA, MG e GO.", "Indústria de Alimentos e Restaurantes: apoio jurídico à produção de charque em GO e ao setor de alimentação em SP.", "Parcerias Público-Privadas (PPP): consultoria em projetos de iluminação pública em SP e SC."];

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 1.0;
  }, []);
  return <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover video-enhance">
            <source src={institutionalVideo} type="video/mp4" />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#1a2e1a]/70" />
        </div>

        {/* Hero Content */}
        <div className="container-site relative z-20 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-balance animate-fade-in text-white text-5xl md:text-6xl">
              <span className="block text-accent">Soluções legais confiáveis e eficazes</span>
            </h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed animate-slide-up font-normal text-left md:text-2xl">
              Assessoria jurídica empresarial com excelência e segurança.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-slide-up" style={{
            animationDelay: "0.1s"
          }}>
              <Button asChild size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Falar com Advogado
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/atuacao#areas-grid">Áreas de Atuação</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm">OAB Regular</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm">Resposta em 24h</span>
              </div>
            </div>

            {/* Manifesto Tag */}
            <div className="mt-6">
              <ManifestoModal />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-background via-background/80 to-transparent pt-16 pb-8">
          <div className="container-site">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-accent">17+</div>
                <div className="text-white/80 text-sm mt-1">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-accent">500+</div>
                <div className="text-white/80 text-sm mt-1">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-accent">17</div>
                <div className="text-white/80 text-sm mt-1">Países de Atuação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-accent">100%</div>
                <div className="text-white/80 text-sm mt-1">Comprometimento</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <TrustIndicators variant="light" />

      {/* Quem Somos */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeading title="Sobre Nós" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fundado no ano de 2008 pelo sócio fundador Rodrigo Vitalino, o escritório Rodrigo Vitalino Advogados
                  desenvolve uma assessoria jurídica e consultoria empresarial de forma prática e eficiente ao cliente.
                </p>
                <p>
                  Contamos com uma equipe de profissionais em diversas áreas auxiliando as empresas na gestão de forma
                  preventiva e no contencioso buscando melhores resultados com transparência e segurança Jurídica.
                </p>
                <p>
                  Atuamos também em Portugal, onde o Advogado Rodrigo Vitalino possui inscrição na Ordem dos Advogados
                  de Portugal.
                </p>
              </div>

              {/* Detail Image */}
              <div className="mt-8 rounded-lg overflow-hidden"></div>

              <Button asChild variant="outline" className="mt-8">
                <Link to="/escritorio">
                  Conheça o Escritório
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Valores */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif text-2xl mb-6">Filosofia e Valores</h3>
              <ul className="space-y-3">
                {valores.map((valor, index) => <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{valor}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding bg-secondary">
        <div className="container-site">
          <SectionHeading title="Nossos Diferenciais" subtitle="O que nos torna únicos na prestação de serviços jurídicos" centered />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {diferenciais.map((item, index) => <div key={index} className="bg-background rounded-lg p-8 border border-border card-hover">
                <item.icon className="h-10 w-10 text-accent mb-6" />
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>)}
          </div>

          {/* Meeting Image */}
          <div className="mt-12 max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg"></div>
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
                {clientesNacionais.map((cliente, index) => <li key={index} className="border-l-2 border-accent pl-4">
                    {cliente}
                  </li>)}
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
                {clientesInternacionais.map((cliente, index) => <li key={index} className="border-l-2 border-accent pl-4">
                    {cliente}
                  </li>)}
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