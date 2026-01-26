import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import heroImage from "@/assets/areas/direito-empresarial-hero.jpg";
import { Building2, Briefcase, FileText } from "lucide-react";

export default function DireitoEmpresarial() {
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
              <li className="text-foreground">Direito Empresarial</li>
            </ol>
          </nav>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Icon Badge */}
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0 animate-fade-in">
              <div className="w-full h-full bg-accent/10 border border-accent/30 rounded-2xl flex flex-col items-center justify-center gap-2 p-4">
                <div className="flex gap-3">
                  <Building2 className="w-12 h-12 text-accent" />
                  <Briefcase className="w-12 h-12 text-accent" />
                </div>
                <FileText className="w-12 h-12 text-accent" />
              </div>
            </div>
            
            {/* Title & Description */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">
                Direito Empresarial
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Assessoria jurídica completa para empresas e empreendedores
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
                Ter uma assessoria jurídica em direito empresarial é muitas vezes indispensável para garantir a criação e manutenção correta e saudável de uma empresa. Este tipo de serviço é essencial no momento da abertura de um negócio, de expansão comercial, relacionamento com clientes, relação com funcionários, rompimento de sociedade e até mesmo no encerramento das atividades comerciais.
              </p>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Por que a Assessoria em Direito Empresarial é importante</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Modelo Jurídico Adequado:</strong> Compreender qual é o melhor modelo jurídico das atividades de uma empresa perante os sistemas tributários estaduais e federais.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Prevenção Trabalhista:</strong> Evitar litígios no âmbito da legislação trabalhista.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Clareza Societária:</strong> Dar clareza aos sócios sobre responsabilidades e direitos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Regularização:</strong> Regularizar a situação da empresa em processos de aquisição, fusão, venda ou falência.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Direito do Consumidor:</strong> Garantir conformidade com as leis do Direito do Consumidor.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">O que é Direito Empresarial?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O Direito Empresarial, uma das práticas do Direito Privado, está relacionado com a regulamentação e aplicação de leis nas atividades empresariais e dos empresários. Trata-se de um conjunto de normas que opera sobre as relações entre pessoas físicas e jurídicas envolvidas no desenvolvimento e atuação de uma empresa.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">O Papel do Advogado Empresarial</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As principais diretrizes para o exercício do Direito Empresarial encontram-se previstas no Código Civil, constituindo o alicerce normativo da matéria. Todavia, um escritório de Assessoria Empresarial deve igualmente deter conhecimento aprofundado em legislações correlatas, tais como a trabalhista, tributária, administrativa, previdenciária, cambial, constitucional, societária e falimentar.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-4">
                O serviço de Assessoria em Direito Empresarial é fundamental para que uma empresa possa se prevenir de riscos e problemas perante a Legislação Brasileira. Seja no momento da formação de uma sociedade, ou até mesmo na dissolução de um negócio, ter uma assessoria jurídica capaz de orientar e direcionar as ações empresariais é essencial em todos os tipos de atividade comercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Precisa de assessoria empresarial?" 
        description="Entre em contato para uma consultoria especializada em Direito Empresarial." 
      />
    </Layout>
  );
}
