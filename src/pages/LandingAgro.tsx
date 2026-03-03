import { Layout } from "@/components/layout/Layout";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Shield,
  Phone,
  ArrowRight,
  Scale,
  Users,
  CheckCircle,
  TrendingUp,
  Landmark,
  FileText,
  Home,
  Receipt,
  Heart,
  Handshake,
  Search,
  ClipboardList,
  Gavel,
  MessageCircle,
  Clock,
  Award,
  Target,
  Zap,
  TreePine } from
"lucide-react";
import heroImage from "@/assets/areas/agronegocio-landing-hero.jpg";
import logoHero from "@/assets/logo-rv-transparent.png";

const WHATSAPP_LINK =
"https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20direito%20do%20agroneg%C3%B3cio.";

const whatsappService = (service: string) =>
`https://wa.me/5511940449696?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(service)}.%20Podem%20me%20auxiliar%3F`;

export default function LandingAgro() {
  return (
    <Layout>
      <PageSEO
        title="Assessoria Jurídica para o Agronegócio | Rodrigo Vitalino Advogados"
        description="Proteção patrimonial, recuperação judicial, planejamento sucessório e assessoria completa para produtores rurais e empresas do agronegócio. Atendimento em todo o Brasil."
        jsonLd={breadcrumbSchema([
        { name: "Início", url: "/" },
        { name: "Agronegócio", url: "/agronegocio" }]
        )} />
      

      {/* ═══════════════════════════════════════════════
           HERO — Full-bleed image + overlay card
        ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center image-enhance-strong"
          style={{ backgroundImage: `url(${heroImage})` }} />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f0d]/90 via-[#1a2e1a]/80 to-[#1a2e1a]/40" />

        <div className="container-site relative z-10 py-16 md:py-28">
          <div className="max-w-2xl bg-background/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-border/30">
            





            

            <h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-accent leading-tight mb-6 animate-fade-in text-balance"
              style={{ textShadow: "2px 3px 12px rgba(0,0,0,0.5)" }}>
              
              Assessoria jurídica de quem entende a realidade do campo.
            </h1>

            <p
              className="text-lg md:text-xl text-foreground/90 mb-8 animate-slide-up max-w-xl leading-relaxed"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}>
              
              Atuamos com estratégia, sigilo e proximidade para proteger o patrimônio, reestruturar dívidas e garantir a continuidade do seu negócio rural.
            </p>

            <Button
              asChild
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-xl w-full sm:w-auto text-base animate-slide-up"
              style={{ animationDelay: "0.15s" }}>
              
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2">
                
                <MessageCircle className="h-5 w-5" />
                Converse com Nossa Equipe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════
           PAIN POINTS — "Como podemos lhe ajudar?"
        ═══════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-6">
            Como podemos lhe ajudar hoje?
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              <strong className="text-foreground">Conhecemos de perto</strong> as dificuldades que o{" "}
              <strong className="text-foreground">produtor rural</strong> enfrenta no{" "}
              <strong className="text-foreground">dia a dia</strong>. Desde a pressão para honrar{" "}
              <strong className="text-foreground">compromissos financeiros</strong> com bancos e cooperativas, a necessidade de formalizar{" "}
              <strong className="text-foreground">contratos</strong> que tragam{" "}
              <strong className="text-foreground">segurança</strong> real, até a preocupação com a proteção do{" "}
              <strong className="text-foreground">patrimônio familiar</strong> e o futuro do{" "}
              <strong className="text-foreground">seu legado</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              No agronegócio, os desafios são constantes — mas você{" "}
              <strong className="text-accent">não precisa enfrentá-los sozinho</strong>.
            </p>
          </div>

          {/* Pain cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
            {
              icon: Landmark,
              text: "Precisa renegociar dívidas agrícolas e lidar com a pressão de instituições financeiras, revendas e tradings."
            },
            {
              icon: TrendingUp,
              text: "Enfrenta incertezas com preços de commodities, custos de insumos e perdas por eventos climáticos."
            },
            {
              icon: Target,
              text: "Tem dificuldades para planejar financeiramente a continuidade da propriedade diante das oscilações do mercado."
            },
            {
              icon: Receipt,
              text: "Está preocupado com a Reforma Tributária e o impacto da taxação sobre heranças na sucessão do negócio."
            },
            {
              icon: Users,
              text: "Deseja evitar conflitos familiares relacionados a inventários, gestão da propriedade e preservação do legado."
            },
            {
              icon: Home,
              text: "Precisa regularizar imóveis rurais para transferências, garantias ou obtenção de crédito financeiro."
            },
            {
              icon: Gavel,
              text: "Teve bens penhorados ou está sofrendo execução por custeio de safra, financiamento de maquinário ou dívidas agrícolas."
            }].
            map(({ icon: Icon, text }, i) =>
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 transition-colors duration-300">
              
                <div className="p-2.5 rounded-xl bg-accent/10 flex-shrink-0">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed no-justify">{text}</p>
              </div>
            )}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              Nossa assessoria jurídica especializada busca minimizar esses riscos,{" "}
              <strong className="text-foreground">otimizando seu negócio e protegendo seu patrimônio rural</strong>. Trabalhamos para criar um ambiente jurídico favorável para que sua produção prospere.
            </p>
            <Button
              asChild
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg">
              
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2">
                
                <Phone className="h-5 w-5" />
                Falar com Advogado Especialista
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
           SERVICES GRID
        ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Nossos Serviços
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
            {
              icon: Gavel,
              title: "Defesa em Execuções",
              desc: "Proteção contra execuções rurais movidas por bancos, cooperativas, revendas e tradings.",
              service: "defesa em execuções rurais"
            },
            {
              icon: Users,
              title: "Planejamento Sucessório",
              desc: "Estruturação de holdings, assessoria em sucessões e otimização tributária para transição entre gerações.",
              service: "planejamento sucessório"
            },
            {
              icon: FileText,
              title: "Contratos Rurais",
              desc: "Análise e elaboração de contratos de compra e venda, arrendamento rural e parceria agrícola.",
              service: "contratos rurais"
            },
            {
              icon: Home,
              title: "Posse e Propriedade",
              desc: "Ações de reintegração, manutenção de posse, usucapião e regularização de imóveis rurais.",
              service: "posse e propriedade rural"
            },
            {
              icon: Receipt,
              title: "Direito Tributário",
              desc: "Defesa em execuções fiscais, recuperação de créditos e planejamento tributário para o agro.",
              service: "direito tributário rural"
            },
            {
              icon: Scale,
              title: "Recuperação Judicial",
              desc: "Reestruturação de dívidas e proteção patrimonial para produtores e empresas rurais em crise.",
              service: "recuperação judicial no agronegócio"
            },
            {
              icon: Heart,
              title: "Família e Sucessões",
              desc: "Divórcio, inventário e proteção do patrimônio familiar ligado à atividade rural.",
              service: "direito de família e sucessões"
            },
            {
              icon: Handshake,
              title: "Negociação de Dívidas",
              desc: "Renegociação estratégica de passivos com instituições financeiras e fornecedores do setor.",
              service: "negociação de dívidas agrícolas"
            }].
            map(({ icon: Icon, title, desc, service }) =>
            <div
              key={title}
              className="group flex flex-col p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
              
                <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 no-justify">
                  {desc}
                </p>
                <a
                href={whatsappService(service)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:underline">
                
                  Saiba Mais
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
           PROCESS — 3 Steps
        ═══════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
            Como Funciona Nosso Trabalho
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12 no-justify">
            Um processo claro, direto e pensado para quem não tem tempo a perder.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
            {
              step: "01",
              icon: Search,
              title: "Análise do Caso",
              desc: "Primeiro, captamos suas necessidades de forma rápida pelo WhatsApp para que nossos especialistas possam avaliar a situação com agilidade."
            },
            {
              step: "02",
              icon: ClipboardList,
              title: "Estratégia Personalizada",
              desc: "Identificamos os detalhes do problema, reunimos documentos essenciais e elaboramos um plano de ação sob medida — presencial ou online."
            },
            {
              step: "03",
              icon: Gavel,
              title: "Execução e Defesa",
              desc: "Com todas as informações mapeadas, aplicamos nossa experiência para proteger seus interesses e defender seus direitos com máxima eficiência."
            }].
            map(({ step, icon: Icon, title, desc }) =>
            <div
              key={step}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/60">
              
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                  Passo {step}
                </div>
                <div className="p-4 rounded-2xl bg-accent/10 mb-6 mt-2">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed no-justify">{desc}</p>
              </div>
            )}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg">
              
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2">
                
                <MessageCircle className="h-5 w-5" />
                Fale Conosco pelo WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
           AUTHORITY / EXPERTISE
        ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-6">
              Experiência que faz a diferença
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed text-center mb-4">
              Do campo aos tribunais, nossa expertise jurídica abrange todo o ciclo do agronegócio.{" "}
              <strong className="text-foreground">
                Há anos atuamos em questões jurídicas complexas que desafiam empresários e produtores rurais
              </strong>{" "}
              — de execuções e cobranças a planejamentos sucessórios e tributários.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed text-center mb-10">
              Navegamos pelo direito bancário para proteger e renegociar dívidas agrícolas. No campo das sucessões, conduzimos inventários e estruturamos holdings rurais. Em cada aspecto do seu empreendimento,{" "}
              <strong className="text-accent">estamos prontos para proteger seus interesses e impulsionar seu sucesso</strong>.
            </p>

            {/* Trust indicators */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
              { icon: Award, label: "Referência Nacional" },
              { icon: Shield, label: "Sigilo Absoluto" },
              { icon: TreePine, label: "Foco no Agro" },
              { icon: Zap, label: "Agilidade Estratégica" }].
              map(({ icon: Icon, label }) =>
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60">
                
                  <Icon className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
           BENEFITS — "Transforme desafios em oportunidades"
        ═══════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
            Transforme desafios em oportunidades
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12 no-justify">
            Com a Rodrigo Vitalino Advogados ao seu lado, você transforma preocupações em terreno fértil para o crescimento.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
            {
              icon: Leaf,
              title: "Foco na Produção",
              desc: "Concentre-se no que faz de melhor: produzir e inovar, sem se preocupar com entraves jurídicos."
            },
            {
              icon: CheckCircle,
              title: "Decisões Seguras",
              desc: "Tome decisões informadas com confiança, respaldado por orientação jurídica especializada."
            },
            {
              icon: Users,
              title: "Legado Protegido",
              desc: "Construa um legado duradouro para as próximas gerações com planejamento sucessório sólido."
            },
            {
              icon: TrendingUp,
              title: "Resultados Concretos",
              desc: "Maximize seus resultados enquanto minimiza riscos com estratégia jurídica personalizada."
            }].
            map(({ icon: Icon, title, desc }) =>
            <div
              key={title}
              className="text-center p-6 rounded-2xl bg-card border border-border/60">
              
                <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed no-justify">{desc}</p>
              </div>
            )}
          </div>

          <div className="max-w-2xl mx-auto mt-12 p-8 rounded-2xl bg-accent/10 border border-accent/20 text-center">
            <p className="text-foreground/90 text-lg italic font-serif mb-2">
              "Não deixe que desafios legais limitem o potencial do seu negócio."
            </p>
            <p className="text-muted-foreground text-sm">
              Trabalhe com tranquilidade sabendo que seus interesses estão nas mãos de quem realmente entende do assunto.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
           FINAL CTA
        ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#d6e7ff]/[0.36]">
        <div className="container-site text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
            Pronto para proteger seu patrimônio rural?
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8 no-justify">
            Converse com um dos nossos especialistas e descubra como podemos ajudar seu negócio a prosperar com segurança jurídica.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button
              asChild
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 h-auto text-base shadow-xl w-full sm:w-auto">
              
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2">
                
                <MessageCircle className="h-5 w-5" />
                Falar com Especialista pelo WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-3 h-auto text-base w-full sm:w-auto">
              
              <a href="tel:+5511940449696" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                (11) 94044-9696
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-foreground/50">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>100% Sigiloso</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Resposta em até 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Atendimento em todo o Brasil</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>);

}