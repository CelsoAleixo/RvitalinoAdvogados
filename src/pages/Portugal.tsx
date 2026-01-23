import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { QuoteBand } from "@/components/shared/QuoteBand";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CheckCircle, Euro, FileText, Building2 } from "lucide-react";
import portugalBusiness from "@/assets/portugal-business.jpg";
import portugalHero from "@/assets/portugal-hero.jpg";
export default function Portugal() {
  return <Layout>
      <PageHero title="Portugal" description="Atuação internacional com inscrição na Ordem dos Advogados de Portugal." breadcrumb={[{
      label: "Portugal"
    }]} backgroundImage={portugalHero} />

      {/* Intro with Image */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Portugal é um país europeu que vem fazendo grandes esforços para reerguer 
                sua economia e, para isso, estimula a abertura de novas empresas. Abaixo 
                algumas informações sobre como abrir empresa em Portugal sendo brasileiro (estrangeiro).
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img alt="Distrito comercial moderno em Lisboa, Portugal" className="w-full h-64 object-cover image-enhance" src="/lovable-uploads/d1806986-e5a9-4a5c-8bc6-8e36418af95e.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Empresa */}
      <section className="section-padding bg-secondary">
        <div className="container-site">
          <SectionHeading title="Tipos de empresa em Portugal" subtitle="Conheça as principais modalidades de constituição empresarial" />

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl">
            {/* Empresa Singular */}
            <div className="bg-background rounded-lg p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8 text-accent" />
                <h3 className="font-serif text-xl">Empresa Singular</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {["Nome individual do empresário", "Sociedade Unipessoal por quotas", "Estabelecimento individual de responsabilidade limitada"].map((item, index) => <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>)}
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Para o empresário em nome individual não há capital mínimo necessário para 
                abertura da empresa. Para uma Sociedade Unipessoal por quotas e Estabelecimento 
                individual de responsabilidade limitada são necessários pelo menos €5.000,00 de capital.
              </p>
            </div>

            {/* Empresa Coletiva */}
            <div className="bg-background rounded-lg p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8 text-accent" />
                <h3 className="font-serif text-xl">Empresa Coletiva</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {["Sociedade por quotas", "Sociedade Anônima (S.A.)", "Sociedade em nome coletivo", "Sociedade em Comandita", "Cooperativa"].map((item, index) => <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>)}
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Capital mínimo varia conforme o tipo societário escolhido. Consulte-nos 
                para orientação específica sobre a melhor estrutura para seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empresa na Hora */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl">
            <SectionHeading title="Empresa na Hora" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              O serviço "Empresa na Hora" permite constituir uma empresa de forma rápida 
              e simplificada em Portugal. É possível criar uma sociedade comercial num 
              único atendimento presencial.
            </p>

            <div className="bg-card rounded-lg p-6 border border-border mb-8">
              <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Documentos Necessários
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                  <span>NIF (Número de Identificação Fiscal)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                  <span>Documento de identificação válido</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                  <span>Número de Segurança Social (se aplicável)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                  <span>Dados do contador certificado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custos */}
      <section className="section-padding bg-secondary">
        <div className="container-site">
          <div className="max-w-3xl">
            <SectionHeading title="Quanto custa abrir empresa em Portugal" />
            
            <div className="bg-background rounded-lg p-6 border border-border mb-8">
              <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
                <Euro className="h-5 w-5 text-accent" />
                Impostos e Taxas
              </h4>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong className="text-foreground">IRC:</strong> 25% sobre o lucro tributável
                </li>
                <li>
                  <strong className="text-foreground">Derrama:</strong> até 1,5% (varia por município)
                </li>
                <li>
                  <strong className="text-foreground">IVA (Imposto sobre Valor Acrescentado):</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Taxa normal: 23%</li>
                    <li>• Taxa intermédia: 13%</li>
                    <li>• Taxa reduzida: 6% (bens essenciais)</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border">
              <h4 className="font-serif text-lg mb-4">Documentos Recebidos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                  <span>Pacto Social</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                  <span>Códigos de acesso ao Portal das Finanças</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                  <span>Número de Segurança Social da empresa</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <h5 className="font-medium mb-2">Próximos passos:</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Contratar contador certificado</li>
                  <li>• Depósito do capital social (até 5 dias úteis)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <QuoteBand quote="Teu dever é lutar pelo direito, mas no dia em que encontrares o direito em conflito com a justiça, luta pela justiça." author="Eduardo Couture" />

      <CTASection title="Quer abrir empresa em Portugal?" description="Entre em contato para uma consulta sobre internacionalização." />
    </Layout>;
}