import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import heroImage from "@/assets/areas/direito-civil-hero.jpg";
import { Scale, FileText, Shield } from "lucide-react";

export default function DireitoCivil() {
  return (
    <Layout>
      {/* Hero Section com imagem de fundo */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat image-enhance-strong" 
          style={{ backgroundImage: `url(${heroImage})` }} 
        />
        {/* Overlay - reduced opacity for more image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/40" />
        
        {/* Content */}
        <div className="container-site relative z-10 py-20">
          <nav className="mb-8 text-xs sm:text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 whitespace-nowrap">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">Início</a>
              </li>
              <li className="text-muted-foreground/60">/</li>
              <li>
                <a href="/atuacao" className="hover:text-foreground transition-colors">Áreas de Atuação</a>
              </li>
              <li className="text-muted-foreground/60">/</li>
              <li className="text-foreground">Direito Civil</li>
            </ol>
          </nav>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Icon Badge */}
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0 animate-fade-in">
              <div className="w-full h-full bg-accent/10 border border-accent/30 rounded-2xl flex flex-col items-center justify-center gap-2 p-4">
                <div className="flex gap-3">
                  <Scale className="w-12 h-12 text-accent" />
                  <Shield className="w-12 h-12 text-accent" />
                </div>
                <FileText className="w-12 h-12 text-accent" />
              </div>
            </div>
            
            {/* Title & Description */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">
                Direito Civil
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Contratos, responsabilidade civil e relações patrimoniais
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">

            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed text-lg italic border-l-4 border-accent pl-4">
                O Direito Civil é um dos ramos mais tradicionais e abrangentes do Direito, responsável por regular o conjunto de normas que disciplinam os direitos e obrigações da ordem privada, envolvendo diretamente as pessoas, seus bens e suas relações.
              </p>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Fundamentos do Direito Civil</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trata-se da base jurídica que organiza a vida em sociedade, estabelecendo regras para situações cotidianas como contratos, propriedade, responsabilidade civil, família e sucessões. É por meio dele que se assegura a proteção dos direitos individuais, a segurança nas relações jurídicas e a harmonia nas interações sociais e patrimoniais.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Responsabilidade e Indenizações</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Responsabilidade Civil:</strong> Reparação de danos materiais e morais.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Ações Indenizatórias:</strong> Defesa e propositura de ações por danos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Ações de Prestação de Contas:</strong> Cobrança de transparência financeira.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Cobrança e Execuções</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Execuções:</strong> Cumprimento forçado de obrigações.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Ação de Cobrança:</strong> Recuperação de créditos e valores devidos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Ação Monitória:</strong> Cobrança célere de dívidas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Busca e Apreensão:</strong> Recuperação de bens.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Procedimentos e Defesas</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Defesas e Recursos:</strong> Contestações e recursos em todas as instâncias.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Notificação Extrajudicial:</strong> Comunicação formal antes de litígios.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Interpelações Judiciais e Procurações:</strong> Representação e formalização de atos.</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-4">
                Nossa atuação em Direito Civil busca sempre a <strong className="text-foreground">resolução eficiente</strong> de conflitos, priorizando a <strong className="text-foreground">negociação</strong> quando possível e a <strong className="text-foreground">defesa intransigente</strong> dos direitos de nossos clientes quando necessário.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Precisa de orientação em Direito Civil?" 
        description="Entre em contato para uma consultoria especializada." 
      />
    </Layout>
  );
}
