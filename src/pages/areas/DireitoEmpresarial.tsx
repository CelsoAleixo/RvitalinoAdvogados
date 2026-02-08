import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import heroImage from "@/assets/areas/direito-empresarial-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DireitoEmpresarial() {
  const { language } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat image-enhance-strong" 
          style={{ backgroundImage: `url(${heroImage})` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        
        <div className="container-site relative z-10 py-20">
          <nav className="mb-8 text-xs sm:text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 whitespace-nowrap">
              <li><a href="/" className="hover:text-foreground transition-colors">Início</a></li>
              <li className="text-muted-foreground/60">/</li>
              <li><a href="/atuacao" className="hover:text-foreground transition-colors">Áreas de Atuação</a></li>
              <li className="text-muted-foreground/60">/</li>
              <li className="text-foreground">Direito Empresarial</li>
            </ol>
          </nav>
          
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-6 leading-tight">
              Direito Empresarial
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Every company has a story. The ones that endure are those that chose to write it with strategy, foresight, and the right guidance."
                : "Toda empresa tem uma história. As que perduram são aquelas que escolheram escrevê-la com estratégia, visão e a orientação certa."}
            </p>
          </div>
        </div>
      </section>

      {/* Storytelling Content */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* Block 1 - Opening */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Um empresário experiente certa vez nos procurou depois de perder um sócio, metade do faturamento e a confiança de seus investidores — tudo em menos de noventa dias. O motivo? Um contrato social genérico, copiado da internet, que não previa quase nada do que realmente importava.
              </p>
            </div>

            {/* Block 2 - Prevention */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">O custo invisível da improvisação</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Histórias como essa se repetem todos os dias em empresas de todos os portes. Não por falta de competência ou ambição, mas por uma crença perigosa: a de que o jurídico pode esperar. Que o contrato "resolve depois". Que o acordo de sócios "é formalidade". Que compliance "é coisa de multinacional".
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A verdade é que a maioria dos litígios empresariais que chegam ao Judiciário poderiam ter sido evitados com uma única decisão: investir em prevenção. Um contrato bem elaborado não é burocracia — é blindagem. Um programa de governança não é custo — é seguro contra crises que ainda não aconteceram, mas que, sem proteção, inevitavelmente acontecerão.
              </p>
            </div>

            {/* Block 3 - Consultoria vs Contencioso */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Consultoria e contencioso: dois lados da mesma moeda</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Existe uma diferença fundamental entre o advogado que aparece quando o problema já existe e aquele que trabalha para que o problema nunca chegue. A assessoria jurídica contínua opera exatamente nessa fronteira: antecipar cenários, mapear vulnerabilidades, estruturar processos internos e garantir que cada decisão do negócio esteja juridicamente sustentada.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quando o contencioso se torna inevitável, a empresa que já contava com assessoria preventiva chega à disputa com documentação organizada, contratos sólidos e uma narrativa jurídica coerente. Não por sorte — por estratégia. É a diferença entre reagir ao caos e conduzir o jogo.
              </p>
            </div>

            {/* Block 4 - Startups */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Startups: quando a velocidade encontra a lei</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Uma startup promissora captou seu primeiro investimento-anjo. Seis meses depois, os três fundadores discordavam sobre participação societária, vesting e poder de decisão. Não havia acordo de sócios. Não havia cláusula de não competição. O investidor recuou e o negócio travou — não por falta de produto, mas por falta de estrutura jurídica.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Estruturação societária, acordo de sócios, due diligence e captação de investimentos não são etapas opcionais do empreendedorismo. São os alicerces que permitem ao negócio crescer sem implodir por dentro. O advogado empresarial, nesse contexto, não é um obstáculo à inovação — é o arquiteto da sua viabilidade.
              </p>
            </div>

            {/* Block 5 - Contratos */}
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Contratos: a linha entre o acordo e o abismo</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Modelos genéricos de contrato são como remédios sem receita: podem até resolver um sintoma, mas ignoram o diagnóstico. Cada empresa tem riscos específicos, dinâmicas próprias e relações comerciais únicas. Um contrato personalizado prevê o que pode dar errado, distribui responsabilidades com clareza e estabelece mecanismos de resolução antes que qualquer conflito precise de um juiz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cláusulas de rescisão mal redigidas, ausência de penalidades, omissão de propriedade intelectual, falta de definição sobre foro competente — erros aparentemente pequenos que, na prática, custam fortunas. O contrato não é o fim da negociação; é a garantia de que ela será cumprida.
              </p>
            </div>

            {/* Block 6 - Recuperação Judicial */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Recuperação judicial: recomeçar não é fracassar</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Quando uma empresa enfrenta crise financeira severa, a diferença entre sobrevivência e encerramento muitas vezes está na velocidade e na qualidade da resposta jurídica. A recuperação judicial não é sinônimo de falência — é, na verdade, o oposto: uma ferramenta legal que permite à empresa reorganizar suas dívidas, preservar empregos e retomar a operação.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A recuperação extrajudicial, por sua vez, oferece um caminho mais discreto e negociado, ideal para empresas que ainda têm margem de manobra. Em ambos os casos, a estratégia jurídica define o destino: um plano de reestruturação bem desenhado transforma credores em aliados e converte desconfiança em oportunidade.
              </p>
            </div>

            {/* Block 7 - Propriedade Intelectual */}
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Sua marca é seu patrimônio mais vulnerável</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Uma empresa consolidou sua marca ao longo de uma década. Descobriu, então, que um concorrente havia registrado nome semelhante no INPI. A disputa judicial durou anos e custou mais do que o registro preventivo jamais teria custado. Propriedade intelectual não é detalhe — é patrimônio. Marcas, patentes, direitos autorais e segredos industriais precisam de proteção ativa e contínua.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                O registro de marca não é formalidade: é a certidão de nascimento da identidade do seu negócio. Sem ele, qualquer um pode reivindicar o que você construiu.
              </p>
            </div>

            {/* Block 8 - Compliance */}
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Compliance: reputação não se reconstrói com facilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Programas de compliance deixaram de ser diferenciais — são exigências do mercado, dos investidores e da legislação. A responsabilidade dos administradores é pessoal e pode ultrapassar os limites da empresa. Um escândalo de governança não afeta apenas o balanço: destrói relações comerciais, afasta talentos e mancha a reputação de forma duradoura. Implementar uma cultura de conformidade é proteger não apenas a empresa, mas as pessoas que a conduzem.
              </p>
            </div>

            {/* Block 9 - Sucessório */}
            <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Empresas familiares: o legado exige planejamento</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A estatística é conhecida: menos de um terço das empresas familiares sobrevivem à segunda geração. Não por falta de talento dos herdeiros, mas por falta de planejamento sucessório. Conflitos entre familiares, ausência de holdings, governança improvisada e patrimônio misturado com pessoa física são armadilhas que destroem em meses o que foi construído em décadas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                O planejamento societário e sucessório não é apenas sobre herança — é sobre continuidade. É garantir que o negócio sobreviva às pessoas que o criaram e prospere nas mãos de quem o continuará.
              </p>
            </div>

            {/* Closing */}
            <div className="animate-fade-in border-t border-accent/20 pt-10" style={{ animationDelay: "1s" }}>
              <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Direito Empresarial não é sobre leis — é sobre decisões. Cada cláusula, cada estrutura, cada registro é uma escolha que define se a empresa estará protegida ou exposta. Nossa atuação vai além do jurídico: pensamos o negócio, antecipamos riscos e construímos, ao lado de cada cliente, a arquitetura legal que transforma vulnerabilidade em vantagem competitiva.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title={language === "en" ? "Ready to protect your business?" : "Pronto para proteger seu negócio?"} 
        description={language === "en" 
          ? "Talk to our specialists and discover how strategic legal counsel can transform your company's future."
          : "Fale com nossos especialistas e descubra como a assessoria jurídica estratégica pode transformar o futuro da sua empresa."} 
      />
    </Layout>
  );
}
