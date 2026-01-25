import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { Scale, Users, Globe, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const advogados = [
  {
    nome: "Rodrigo Vitalino",
    cargo: "Sócio Fundador",
    especialidade: null,
    email: "rodrigo@rvitalinoadvogados.com.br",
    foto: "/lovable-uploads/d699caab-0157-4f29-ab67-c28d2b8cdcd7.png",
  },
  {
    nome: "Deidre Scaranello",
    cargo: "Diretora Jurídica",
    especialidade: null,
    email: "deidre@rvitalinoadvogados.com.br",
    foto: "/lovable-uploads/deidre-scaranello-fixed.png",
  },
  {
    nome: "Ana Caroline Ianuck",
    cargo: "Advogada Empresarial",
    especialidade: "(especialista em recuperação judicial)",
    email: "ana.caroline@rvitalinoadvogados.com.br",
    foto: "/lovable-uploads/ana-caroline.png",
  },
  {
    nome: "Arthur Vitalino",
    cargo: "Correspondente Jurídico",
    especialidade: "(União Europeia)",
    email: "arthur@rvitalinoadvogados.com.br",
    foto: "/lovable-uploads/arthur-vitalino.png",
  },
  {
    nome: "Elisandra Sousa Barbosa",
    cargo: "Advogada Empresarial",
    especialidade: "(especialista em recuperação judicial)",
    email: "elisandra.sousa@rvitalinoadvogados.com.br",
    foto: "/lovable-uploads/elisandra-sousa.png",
  },
];

export default function Equipe() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-secondary overflow-hidden">
        <div className="container-site relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8 animate-fade-in">
            <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
              Início
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-accent font-medium">Equipe</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6 animate-fade-in">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Nossa Equipe</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in">
            Advogados Especializados
          </h1>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-accent/20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/20" />
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {advogados.map((advogado, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 text-center group"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300 shadow-lg">
                  <img
                    alt={`${advogado.nome} - ${advogado.cargo}`}
                    className="w-full h-full object-cover"
                    src={advogado.foto}
                  />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-1">
                  {advogado.nome}
                </h3>
                <p className="text-accent font-medium text-sm mb-1">{advogado.cargo}</p>
                {advogado.especialidade && (
                  <p className="text-muted-foreground text-xs mb-3">{advogado.especialidade}</p>
                )}
                <a
                  href={`mailto:${advogado.email}`}
                  className="text-muted-foreground hover:text-accent transition-colors text-xs truncate block"
                >
                  {advogado.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Destaque */}
      <section className="section-padding bg-[#1a2e1a]">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Áreas de Destaque
            </h2>
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
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Reestruturação Empresarial
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Somos referência nacional em "Recuperação Judicial", conduzindo processos com
                excelência e transparência. Estruturamos planos viáveis, negociamos com credores e
                asseguramos a preservação da atividade empresarial.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                  Planos viáveis
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                  Negociação
                </span>
              </div>
              <Link
                to="/atuacao/recuperacao-judicial"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group"
              >
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
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Presença em Portugal
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Atuamos também em Portugal, onde o Advogado Rodrigo Vitalino possui inscrição na
                Ordem dos Advogados, garantindo legitimidade e excelência na prática jurídica
                internacional.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                  OAB Portugal
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                  União Europeia
                </span>
              </div>
              <Link
                to="/portugal"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group"
              >
                Atuação em Portugal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
