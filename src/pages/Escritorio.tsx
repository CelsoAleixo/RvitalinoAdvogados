import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Scale, Users, Building2, Globe, Award, MapPin, History, Heart } from "lucide-react";
import escritorioHero from "@/assets/escritorio-hero.png";

const WHATSAPP_LINK = "https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";

const diferenciais = [{
  icon: Scale,
  title: "Especialização",
  description: "Nosso escritório atua fortemente em Direito Empresarial e Corporativo, unindo segurança técnica e visão estratégica. Compreendemos as necessidades de cada cliente e transformamos desafios em soluções práticas e sustentáveis."
}, {
  icon: Users,
  title: "Excelência",
  description: "Somos referência em soluções jurídicas, conduzindo processos com excelência, elaborando estratégias consistentes e negociando com segurança para garantir que nossos clientes superem desafios com tranquilidade."
}];

const valores = [
  "Ética e seriedade na aplicação do Direito",
  "Soluções jurídicas personalizadas e eficientes",
  "Confiabilidade e bom relacionamento com nossos clientes",
  "Conhecimento, competência e aperfeiçoamento técnico",
  "Foco nas necessidades do cliente",
  "Comprometimento com os princípios legais",
  "Transparência sobre os riscos de ações ou projetos",
  "Empreendedorismo"
];

const clientesInternacionais = [
  "Proview Electronics Co Ltd – Taipei / Taiwan",
  "RED International Group – Taipei / Taiwan",
  "Proview LED Lighting Co. Ltd – Taipei / Taiwan",
  "New Era Investment Inc. – Panama / Panama",
  "Reit Investment Corp. – Panama / Panama",
  "North Capital Holding – Copenhagen / Denmark",
  "Dti Korea Co. Ltd – Coreia do Sul"
];

const clientesNacionais = [
  "Transporte Público Urbano e Rodoviário: suporte jurídico a concessionárias em SP, PR, GO, AM, AC, RO, BA, RJ e SC.",
  "Mineração de Ferro e Manganês: assessoria a mineradoras no PA, AP e CE.",
  "Mineração de Granito e Pedras Preciosas: atuação junto a empresas na BA, MG e GO.",
  "Indústria de Alimentos e Restaurantes: apoio jurídico à produção de charque em GO e ao setor de alimentação em SP.",
  "Parcerias Público-Privadas (PPP): consultoria em projetos de iluminação pública em SP e SC."
];

export default function Escritorio() {
  return (
    <Layout>
      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#0d1a0d] overflow-hidden">
          <OptimizedImage
            src={escritorioHero}
            alt="Escritório Rodrigo Vitalino Advogados"
            className="w-full h-full object-cover object-center image-enhance-strong"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a0d]/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0d]/30 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/30" />

        {/* Content */}
        <div className="container-site relative z-10">
          <div className="max-w-xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8 animate-fade-in">
              <Link to="/" className="text-foreground/80 hover:text-accent transition-colors drop-shadow-md">
                Início
              </Link>
              <span className="text-foreground/60 drop-shadow-md">/</span>
              <span className="text-accent font-medium drop-shadow-md">Nosso Escritório</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 mb-6 backdrop-blur-sm animate-fade-in">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-semibold">Desde 2008</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
            }}>
              Nosso Escritório
            </h1>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 md:gap-12 animate-slide-up">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent drop-shadow-lg">17+</div>
                <div className="text-foreground/80 text-sm mt-1 drop-shadow-md">Anos de<br />Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent drop-shadow-lg">500+</div>
                <div className="text-foreground/80 text-sm mt-1 drop-shadow-md">Clientes<br />Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent drop-shadow-lg">17</div>
                <div className="text-foreground/80 text-sm mt-1 drop-shadow-md">Países de<br />Atuação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {/* Sobre Nós */}
            <AccordionItem value="sobre-nos" className="border border-border rounded-xl overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <History className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-serif text-xl font-semibold">Sobre Nós</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Rodrigo Vitalino Advogados vem construindo uma atuação sólida no cenário jurídico e empresarial. 
                      Idealizado por seu fundador, Rodrigo Vitalino, o escritório nasceu com a missão de oferecer soluções 
                      jurídicas estratégicas e consultoria empresarial voltada para resultados práticos e sustentáveis.
                    </p>
                    <p>
                      Ao longo dos anos, reunimos uma equipe multidisciplinar de profissionais que trabalham lado a lado 
                      com empresas de diferentes setores, tanto na prevenção de riscos quanto na defesa em litígios, 
                      sempre com foco em transparência, eficiência e segurança jurídica.
                    </p>
                    <p>
                      Expandimos nossa presença além das fronteiras brasileiras: o advogado Rodrigo Vitalino também 
                      possui inscrição na Ordem dos Advogados de Portugal, o que nos permite atender clientes em âmbito 
                      internacional e oferecer suporte jurídico em operações que envolvem Brasil e Europa.
                    </p>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <OptimizedImage
                      src="/lovable-uploads/d8c139b1-7ccc-4be4-8400-a2fc92806d89.png"
                      alt="Sala de reuniões do escritório Rodrigo Vitalino Advogados"
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>

                  {/* Badge de Fundação */}
                  <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-xl border border-accent/20">
                    <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg">
                      <div className="text-2xl font-serif font-bold">2008</div>
                      <div className="text-xs uppercase tracking-wider">Fundação</div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Mais de 17 anos construindo uma trajetória de excelência em assessoria jurídica empresarial.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Nossos Diferenciais */}
            <AccordionItem value="diferenciais" className="border border-border rounded-xl overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-serif text-xl font-semibold">Nossos Diferenciais</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6">
                  {/* Diferenciais Cards */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {diferenciais.map((item, index) => (
                      <div key={index} className="bg-secondary/50 rounded-xl p-6 border border-border">
                        <item.icon className="h-8 w-8 text-accent mb-4" />
                        <h4 className="font-serif text-lg font-semibold mb-3">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Nossos Princípios */}
                  <div className="bg-[#1a2e1a] rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Heart className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-serif text-xl font-semibold text-foreground">
                        Nossos Princípios - Valores que nos Guiam
                      </h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {valores.map((valor, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-3 bg-foreground/5 backdrop-blur-sm rounded-lg p-4 border border-foreground/10"
                        >
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/90 text-sm leading-relaxed">{valor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Clientes Atendidos */}
            <AccordionItem value="clientes" className="border border-border rounded-xl overflow-hidden bg-card">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-serif text-xl font-semibold">Clientes Atendidos</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nacional */}
                  <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-accent" />
                      </div>
                      <h4 className="font-serif text-lg font-semibold">Companhias Nacionais</h4>
                    </div>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      {clientesNacionais.map((cliente, index) => (
                        <li key={index} className="border-l-2 border-accent pl-4">
                          {cliente}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Internacional */}
                  <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-accent" />
                      </div>
                      <h4 className="font-serif text-lg font-semibold">Companhias Internacionais</h4>
                    </div>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      {clientesInternacionais.map((cliente, index) => (
                        <li key={index} className="border-l-2 border-accent pl-4">
                          {cliente}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
