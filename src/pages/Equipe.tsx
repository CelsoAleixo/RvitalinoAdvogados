import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Users, Globe, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const advogados = [{
  nome: "Rodrigo Vitalino",
  cargo: "Sócio Fundador",
  especialidade: "Reestruturação de Empresas",
  email: "rodrigo@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/d699caab-0157-4f29-ab67-c28d2b8cdcd7.png"
}, {
  nome: "Deidre Scaranello",
  cargo: "Diretora Jurídica",
  especialidade: "Operações Estratégicas na área da insolvência",
  email: "deidre@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/deidre-scaranello-new.avif"
}, {
  nome: "Ana Caroline Ianuck",
  cargo: "Advogada Empresarial",
  especialidade: "Especialista em Recuperação Judicial",
  email: "ana.caroline@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/ana-caroline.png"
}, {
  nome: "Arthur Vitalino",
  cargo: "Correspondente Jurídico",
  especialidade: "Atuação na União Europeia",
  email: "arthur@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/arthur-vitalino.png"
}, {
  nome: "Elisandra Sousa Barbosa",
  cargo: "Advogada Empresarial",
  especialidade: "Especialista em Recuperação Judicial",
  email: "elisandra.sousa@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/elisandra-sousa.png"
}];
export default function Equipe() {
  return <Layout>

      {/* Team Section - Direct Start */}
      <section className="section-padding bg-secondary">
        <div className="container-site px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium uppercase tracking-wider">Nossa Equipe</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Advogados Especializados
            </h1>
          </div>

          {/* First Row - 3 members */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-5 mb-4 lg:mb-5">
            {advogados.slice(0, 3).map((advogado, index) => <div key={index} className="bg-background rounded-xl p-5 lg:p-6 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 text-center group flex flex-col items-center flex-shrink-0 w-full sm:w-auto sm:min-w-[240px] lg:min-w-[260px]">
                <div className="w-36 h-36 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4 ring-2 ring-border group-hover:ring-accent/40 transition-all duration-300 shadow-lg flex-shrink-0">
                  <OptimizedImage src={advogado.foto} alt={`${advogado.nome} - ${advogado.cargo}`} className={`w-full h-full object-cover ${advogado.nome === "Deidre Scaranello" ? "object-[center_25%]" : ""}`} loading="lazy" sizes="(max-width: 640px) 112px, (max-width: 1024px) 112px, 128px" />
                </div>
                <h3 className="font-serif font-bold text-sm lg:text-base text-foreground mb-1 leading-tight whitespace-nowrap">
                  {advogado.nome}
                </h3>
                <p className="text-accent font-semibold text-[9px] lg:text-[10px] uppercase tracking-wider mb-2 whitespace-nowrap">
                  {advogado.cargo}
                </p>
                <div className="flex items-center justify-center">
                  {advogado.especialidade && <p className="font-semibold text-[11px] lg:text-xs leading-snug text-center px-3 py-1.5 bg-accent/10 rounded-md border border-accent/20 whitespace-nowrap text-secondary-foreground">
                      {advogado.especialidade}
                    </p>}
                </div>
                <a href={`mailto:${advogado.email}`} className="text-muted-foreground hover:text-accent transition-colors text-[8px] lg:text-[9px] whitespace-nowrap mt-auto pt-2">
                  {advogado.email}
                </a>
              </div>)}
          </div>

          {/* Second Row - 2 members */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
            {advogados.slice(3, 5).map((advogado, index) => <div key={index + 3} className="bg-background rounded-xl p-5 lg:p-6 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 text-center group flex flex-col items-center flex-shrink-0 w-full sm:w-auto sm:min-w-[240px] lg:min-w-[260px]">
                <div className="w-36 h-36 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-4 ring-2 ring-border group-hover:ring-accent/40 transition-all duration-300 shadow-lg flex-shrink-0">
                  <OptimizedImage src={advogado.foto} alt={`${advogado.nome} - ${advogado.cargo}`} className="w-full h-full object-cover" loading="lazy" sizes="(max-width: 640px) 112px, (max-width: 1024px) 112px, 128px" />
                </div>
                <h3 className="font-serif font-bold text-sm lg:text-base text-foreground mb-1 leading-tight whitespace-nowrap">
                  {advogado.nome}
                </h3>
                <p className="text-accent font-semibold text-[9px] lg:text-[10px] uppercase tracking-wider mb-2 whitespace-nowrap">
                  {advogado.cargo}
                </p>
                <div className="flex items-center justify-center">
                  {advogado.especialidade && <p className="font-semibold text-[11px] lg:text-xs leading-snug text-center px-3 py-1.5 bg-accent/10 rounded-md border border-accent/20 whitespace-nowrap text-secondary-foreground">
                      {advogado.especialidade}
                    </p>}
                </div>
                <a href={`mailto:${advogado.email}`} className="text-muted-foreground hover:text-accent transition-colors text-[8px] lg:text-[9px] whitespace-nowrap mt-auto pt-2">
                  {advogado.email}
                </a>
              </div>)}
          </div>
        </div>
      </section>

      {/* Áreas de Destaque */}
      <section className="section-padding bg-[#1a2e1a]">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Áreas de Destaque</h2>
            <p className="text-white/70">Experiência consolidada</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Reestruturação Empresarial */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                  <span className="text-accent text-xs font-medium">Experiência Consolidada</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Reestruturação Empresarial</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Somos referência nacional em "Recuperação Judicial", conduzindo processos com excelência e
                transparência. Estruturamos planos viáveis, negociamos com credores e asseguramos a preservação da
                atividade empresarial.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">Planos viáveis</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">Negociação</span>
              </div>
              <Link to="/atuacao/recuperacao-judicial" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group">
                Recuperação Judicial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Presença em Portugal */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                  <span className="text-accent text-xs font-medium">Atuação Internacional</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Presença em Portugal</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Atuamos também em Portugal, onde o Advogado Rodrigo Vitalino possui inscrição na Ordem dos Advogados,
                garantindo legitimidade e excelência na prática jurídica internacional.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">OAB Portugal</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">União Europeia</span>
              </div>
              <Link to="/portugal" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group">
                Atuação em Portugal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>;
}