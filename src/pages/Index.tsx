import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { QuoteBand } from "@/components/shared/QuoteBand";
import { CTASection } from "@/components/shared/CTASection";
import { ManifestoModal } from "@/components/shared/ManifestoModal";
import { ArrowRight, Scale, Users, Building2, Globe, CheckCircle, MessageCircle } from "lucide-react";
import heroOffice from "@/assets/hero-office.jpg";
import detailPen from "@/assets/detail-pen.jpg";
import meetingConsultation from "@/assets/meeting-consultation.jpg";
import institutionalVideo from "@/assets/institutional-video.mp4";
const WHATSAPP_LINK = "https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";
const valores = [
  "Ética e seriedade na aplicação do Direito",
  "Soluções jurídicas personalizadas e eficientes",
  "Confiabilidade e bom relacionamento com nossos clientes",
  "Conhecimento, competência e aperfeiçoamento técnico",
  "Foco nas necessidades do cliente",
  "Comprometimento com os princípios legais",
  "Transparência sobre os riscos de ações ou projetos",
  "Empreendedorismo",
];
const diferenciais = [
  {
    icon: Scale,
    title: "Especialização",
    description:"Somos referência nacional em Recuperação Judicial, reconhecidos como o melhor do Brasil. Com excelência e transparência, transformamos crises em crescimento, garantindo continuidade por anos e fortalecendo empresas com segurança jurídica".,

      " 
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description:
      " ao cliente oferecido pelo nosso escritório será sempre por um profissional da área do direito que o cliente estiver necessitando, sempre que possível atendimento pessoal para saneamento e esclarecimento de dúvidas.",
  },
];
const clientesInternacionais = [
  "Proview Electronics Co Ltd – Taipei / Taiwan",
  "RED International Group – Taipei / Taiwan",
  "Proview LED Lighting Co. Ltd – Taipei / Taiwan",
  "New Era Investment Inc. – Panama / Panama",
  "Reit Investment Corp. – Panama / Panama",
  "North Capital Holding – Copenhagen / Denmark",
  "Dti Korea Co. Ltd – Coreia do Sul",
];
const clientesNacionais = [
  "Empresas Concessionárias de Transporte Público Urbano e Rodoviário nos estados de São Paulo, Paraná, Goiás, Amazonas, Acre, Rondônia e Bahia",
  "Empresas de mineração de ferro e manganês nos estados de Pará, Amapá e Ceará",
  "Empresas de Mineração de granito e pedras preciosas na Bahia, Minas Gerais e Goiás",
  "Indústria de Alimentos (Charque) no estado de Goiás e restaurantes em São Paulo",
  "Projetos de PPP – Parceria Público Privada na área de Iluminação nos estados de São Paulo e Santa Catarina",
  "Empresas concessionárias, estados Rio de Janeiro e Santa Catarina",
];
export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Normal playback speed for smooth FPS
    video.playbackRate = 1.0;
  }, []);
  return (
    <Layout>
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
            <h1 className="text-balance animate-fade-in text-accent text-5xl">Soluções legais confiáveis e eficazes</h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed animate-slide-up font-normal text-left md:text-2xl">
              Assessoria jurídica e consultoria empresarial com atuação prática, eficiente e transparente.
            </p>
            <div
              className="mt-10 flex flex-wrap gap-4 animate-slide-up"
              style={{
                animationDelay: "0.1s",
              }}
            >
              <Button asChild size="lg" className="group">
                <Link to="/contato" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Contato
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Link to="/atuacao#areas-grid">Áreas de Atuação</Link>
              </Button>
            </div>

            {/* Manifesto Tag */}
            <div className="mt-8">
              <ManifestoModal />
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

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
              <div className="mt-8 rounded-lg overflow-hidden">
                <img
                  src={detailPen}
                  alt="Detalhe de caneta e documentos jurídicos"
                  className="w-full h-48 object-cover image-enhance"
                />
              </div>

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
                {valores.map((valor, index) => (
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
      <section className="section-padding bg-secondary">
        <div className="container-site">
          <SectionHeading
            title="Nossos Diferenciais"
            subtitle="O que nos torna únicos na prestação de serviços jurídicos"
            centered
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {diferenciais.map((item, index) => (
              <div key={index} className="bg-background rounded-lg p-8 border border-border card-hover">
                <item.icon className="h-10 w-10 text-accent mb-6" />
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Meeting Image */}
          <div className="mt-12 max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Ambiente de consultoria jurídica profissional"
              className="w-full h-64 object-cover image-enhance"
              src="/lovable-uploads/14557c61-3649-4d86-8bbe-16a74379c3a7.png"
            />
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeading
            title="Clientes Atendidos"
            subtitle="Experiência comprovada com empresas nacionais e internacionais"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Empresas */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-accent" />
                <h4 className="font-serif text-lg">Empresas</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>- Empresas de transporte público e         rodoviário</li>
                <li>- Setor de mineração de ferro e                 manganês</li>

                <li>- Corporativas do agronegócio em           recuperação judicial</li>
                <li>-  Indústria alimentícia</li>

                <li>- PPP em iluminação pública - Empresa de Eletrônicos - Companhia de Investimentos</li>
              </ul>
            </div>

            {/* Internacional */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-accent" />
                <h4 className="font-serif text-lg">Companhias Internacionais</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {clientesInternacionais.map((cliente, index) => (
                  <li key={index}>{cliente}</li>
                ))}
              </ul>
            </div>

            {/* Nacional */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-accent" />
                <h4 className="font-serif text-lg">Companhias Nacionais</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {clientesNacionais.map((cliente, index) => (
                  <li key={index}>{cliente}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <QuoteBand
        quote="A injustiça em qualquer lugar é uma ameaça à justiça por toda parte."
        author="Martin Luther King Jr."
      />

      {/* CTA */}
      <CTASection />
    </Layout>
  );
}
