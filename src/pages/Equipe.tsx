import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Users, Shield, FileText, Scale, Building2, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const advogados = [{
  nome: "Rodrigo Vitalino",
  cargo: "Sócio Fundador",
  cargoEn: "Founding Partner",
  especialidade: "(Reestruturação de Empresas)",
  especialidadeEn: "(Corporate Restructuring)",
  email: "rodrigo@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/d699caab-0157-4f29-ab67-c28d2b8cdcd7.png"
}, {
  nome: "Deidre Scaranello",
  cargo: "Diretora Jurídica",
  cargoEn: "Legal Director",
  especialidade: "(Operações Estratégicas em Insolvência)",
  especialidadeEn: "(Strategic Insolvency Operations)",
  email: "deidre@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/deidre-scaranello-new.png"
}, {
  nome: "Ana Caroline Ianuck",
  cargo: "Advogada Empresarial",
  cargoEn: "Corporate Lawyer",
  especialidade: "(Especialista em recuperação judicial)",
  especialidadeEn: "(Judicial Recovery Specialist)",
  email: "ana.caroline@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/ana-caroline.png"
}, {
  nome: "Arthur Vitalino",
  cargo: "Correspondente Jurídico",
  cargoEn: "Legal Correspondent",
  especialidade: "(Na União Europeia)",
  especialidadeEn: "(In the European Union)",
  email: "arthur@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/arthur-vitalino.png"
}, {
  nome: "Elisandra Sousa Barbosa",
  cargo: "Advogada Empresarial",
  cargoEn: "Corporate Lawyer",
  especialidade: "(Especialista em recuperação judicial)",
  especialidadeEn: "(Judicial Recovery Specialist)",
  email: "elisandra.sousa@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/elisandra-sousa-new.png"
}];

export default function Equipe() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Team Section - Direct Start */}
      <section className="section-padding bg-secondary">
        <div className="max-w-[1600px] mx-auto px-3 md:px-4 lg:px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium uppercase tracking-wider">{t("team.title")}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t("team.subtitle")}
            </h1>
          </div>

          {/* Team Grid - Professional 5-column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {advogados.map((advogado, index) => (
              <div key={index} className="bg-background rounded-xl p-6 lg:p-7 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 text-center group flex flex-col items-center h-full">
                <div className="w-40 h-40 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden mb-5 ring-2 ring-border group-hover:ring-accent/40 transition-all duration-300 shadow-lg flex-shrink-0">
                  <OptimizedImage 
                    src={advogado.foto} 
                    alt={`${advogado.nome} - ${language === 'pt' ? advogado.cargo : advogado.cargoEn}`} 
                    className={`w-full h-full object-cover ${advogado.nome === "Deidre Scaranello" ? "object-[center_20%] scale-110" : advogado.nome === "Elisandra Sousa Barbosa" ? "object-[center_15%] scale-105" : ""}`} 
                    loading="lazy" 
                    sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px" 
                  />
                </div>
                <h3 className="font-serif font-bold text-sm lg:text-base text-foreground mb-1 leading-tight">
                  {advogado.nome}
                </h3>
                <p className="text-accent font-semibold text-[9px] lg:text-[10px] uppercase tracking-wider mb-1 text-justify">
                  {language === 'pt' ? advogado.cargo : advogado.cargoEn}
                </p>
                <div className="min-h-[32px] flex items-start justify-center">
                  {advogado.especialidade && (
                    <p className="text-muted-foreground text-[10px] lg:text-xs leading-tight text-center">
                      {language === 'pt' ? advogado.especialidade : advogado.especialidadeEn}
                    </p>
                  )}
                </div>
                <a 
                  href={`mailto:${advogado.email}`} 
                  className="text-muted-foreground hover:text-accent transition-colors text-[8px] truncate block w-full mt-auto pt-2 lg:text-xs"
                >
                  {advogado.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especialização da Equipe - Q&A Format */}
      <section className="section-padding bg-[#1a2e1a]">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium uppercase tracking-wider">
                  {language === 'pt' ? 'Especialização' : 'Expertise'}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                {language === 'pt' 
                  ? 'Por Que Nossa Equipe Faz a Diferença?' 
                  : 'Why Does Our Team Make the Difference?'}
              </h2>
            </div>

            {/* Q&A Blocks */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Block 1 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-accent/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-accent/10">
                    <Scale className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-accent">
                    {language === 'pt' ? 'Prevenir ou remediar?' : 'Prevent or remedy?'}
                  </h3>
                </div>
                <p className="text-white/75 leading-relaxed text-sm">
                  {language === 'pt'
                    ? 'Atuamos antes que o problema surja. Assessoria contínua, compliance e governança corporativa garantem que cada decisão esteja juridicamente respaldada — transformando a advocacia em vantagem competitiva.'
                    : 'We act before the problem arises. Ongoing advisory, compliance, and corporate governance ensure every decision is legally supported — turning legal practice into competitive advantage.'}
                </p>
              </div>

              {/* Block 2 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-accent/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-accent/10">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-accent">
                    {language === 'pt' ? 'Seus contratos protegem ou expõem?' : 'Do your contracts protect or expose?'}
                  </h3>
                </div>
                <p className="text-white/75 leading-relaxed text-sm">
                  {language === 'pt'
                    ? 'Contratos genéricos são uma das maiores fontes de conflito corporativo. Elaboramos cláusulas personalizadas, acordos de sócios e estruturações societárias que blindam sua operação.'
                    : 'Generic contracts are one of the greatest sources of corporate conflict. We draft customized clauses, shareholder agreements, and corporate structures that shield your operations.'}
                </p>
              </div>

              {/* Block 3 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-accent/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-accent/10">
                    <Building2 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-accent">
                    {language === 'pt' ? 'Crise financeira ou reestruturação?' : 'Financial crisis or restructuring?'}
                  </h3>
                </div>
                <p className="text-white/75 leading-relaxed text-sm">
                  {language === 'pt'
                    ? 'Recuperação judicial e extrajudicial exigem estratégia, não desespero. Desenvolvemos planos viáveis de reestruturação, captação de investimentos e due diligence para retomar o crescimento.'
                    : 'Judicial and extrajudicial recovery require strategy, not desperation. We develop viable restructuring plans, investment raising, and due diligence to resume growth.'}
                </p>
              </div>

              {/* Block 4 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-accent/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-accent/10">
                    <Landmark className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-accent">
                    {language === 'pt' ? 'Seu legado está protegido?' : 'Is your legacy protected?'}
                  </h3>
                </div>
                <p className="text-white/75 leading-relaxed text-sm">
                  {language === 'pt'
                    ? 'Para empresas familiares, oferecemos planejamento sucessório, holdings e prevenção de conflitos entre herdeiros. Protegemos marcas, patentes e propriedade intelectual com visão de longo prazo.'
                    : 'For family businesses, we offer succession planning, holdings, and prevention of conflicts among heirs. We protect trademarks, patents, and intellectual property with a long-term vision.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}