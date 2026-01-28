import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Users, Scale } from "lucide-react";

const advogados = [{
  nome: "Rodrigo Vitalino",
  cargo: "Sócio Fundador",
  especialidade: "Reestruturação de Empresas",
  email: "rodrigo@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/d699caab-0157-4f29-ab67-c28d2b8cdcd7.png"
}, {
  nome: "Deidre Scaranello",
  cargo: "Diretora Jurídica",
  especialidade: "Operações Estratégicas em Insolvência",
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

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-6 block whitespace-nowrap">
                Por que nos escolher
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight whitespace-nowrap">
                Excelência e Comprometimento em Cada Caso
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10 text-lg whitespace-nowrap">
                Acreditamos que cada cliente é único e merece uma abordagem personalizada. Nossa equipe combina expertise técnica com uma visão estratégica, garantindo soluções eficazes e resultados consistentes.
              </p>
              
              <div className="space-y-5">
                {["Atendimento personalizado e dedicado", "Equipe multidisciplinar e experiente", "Estratégias jurídicas inovadoras", "Transparência em todas as etapas", "Resultados comprovados ao longo de 17 anos"].map((item, index) => <div key={index} className="flex items-center gap-4 group whitespace-nowrap">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground text-lg whitespace-nowrap">{item}</span>
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

      <CTASection />
    </Layout>;
}