import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Users, FileText } from "lucide-react";
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
  foto: "/lovable-uploads/deidre-scaranello-new.avif"
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
  foto: "/lovable-uploads/elisandra-sousa.png"
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
                    className={`w-full h-full object-cover ${advogado.nome === "Deidre Scaranello" ? "object-[center_25%]" : ""}`} 
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

      {/* Especialização da Equipe */}
      <section className="section-padding bg-[#1a2e1a]">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                <FileText className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium uppercase tracking-wider">
                  {language === 'pt' ? 'Especialização' : 'Expertise'}
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                {language === 'pt' 
                  ? 'Advogados que Pensam o Negócio, Não Apenas a Lei' 
                  : 'Lawyers Who Think Business, Not Just Law'}
              </h2>
            </div>

            {/* Parágrafo Principal */}
            <div className="space-y-6 text-white/80 leading-relaxed text-base md:text-lg">
              <p>
                {language === 'pt'
                  ? 'Nossa equipe é formada por advogados especializados em Direito Empresarial que atuam como verdadeiros parceiros estratégicos das empresas. Mais do que resolver problemas jurídicos, pensamos à frente — antecipando riscos, blindando operações e criando estruturas legais que sustentam o crescimento do negócio. Acreditamos que a melhor atuação jurídica é aquela que previne o litígio antes mesmo que ele surja. Por isso, investimos em assessoria contínua, compliance, governança corporativa e gestão de riscos, garantindo que cada decisão empresarial esteja juridicamente respaldada. Contratos bem elaborados, cláusulas personalizadas e uma visão preventiva são as ferramentas que transformam a advocacia em vantagem competitiva. A diferença entre uma consultoria jurídica preventiva e o contencioso é simples: no primeiro, você investe para proteger; no segundo, você gasta para remediar. Problemas societários, passivos trabalhistas ocultos, contratos genéricos e ausência de programas de compliance são situações que poderiam ser evitadas com o acompanhamento de advogados especializados desde o início.'
                  : 'Our team is composed of lawyers specialized in Corporate Law who act as true strategic partners for businesses. More than solving legal problems, we think ahead — anticipating risks, shielding operations, and creating legal structures that support business growth. We believe the best legal practice is one that prevents litigation before it even arises. That is why we invest in ongoing advisory, compliance, corporate governance, and risk management, ensuring every business decision is legally supported. Well-drafted contracts, customized clauses, and a preventive vision are the tools that turn legal practice into competitive advantage.'}
              </p>

              <p>
                {language === 'pt'
                  ? 'A profundidade técnica da nossa equipe abrange desde a estruturação societária e acordos de sócios até a captação de investimentos e processos de due diligence, passando pela elaboração de contratos empresariais personalizados — porque contratos genéricos são uma das maiores fontes de conflito no meio corporativo. Atuamos em recuperação judicial e extrajudicial, compreendendo as diferenças estratégicas entre cada caminho e desenvolvendo planos de reestruturação viáveis. Protegemos marcas, patentes e direitos autorais, prevenindo conflitos de propriedade intelectual que podem comprometer anos de construção de reputação. Implementamos programas de compliance sob medida, conscientes de que a responsabilidade dos administradores e o impacto reputacional exigem uma governança sólida. E para empresas familiares, oferecemos planejamento societário e sucessório com a constituição de holdings, prevenção de conflitos entre herdeiros e garantia de continuidade do negócio — porque proteger um legado exige tanto sensibilidade quanto técnica.'
                  : 'The technical depth of our team spans from corporate structuring and shareholder agreements to investment raising and due diligence processes, including the drafting of customized business contracts — because generic contracts are one of the greatest sources of conflict in the corporate world. We work in judicial and extrajudicial recovery, understanding the strategic differences between each path and developing viable restructuring plans. We protect trademarks, patents, and copyrights, preventing intellectual property conflicts that can compromise years of reputation building. We implement tailored compliance programs, aware that administrator liability and reputational impact demand solid governance. And for family businesses, we offer corporate and succession planning with holding structures, prevention of conflicts among heirs, and business continuity — because protecting a legacy requires both sensitivity and expertise.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}