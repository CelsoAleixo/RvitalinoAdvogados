import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import heroImage from "@/assets/areas/direito-empresarial-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Scale, ShieldCheck, FileText, Rocket, Stamp, ClipboardCheck, Users } from "lucide-react";

export default function DireitoEmpresarial() {
  const { language } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
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
                ? "Strategic legal protection for companies that want to grow with security, prevent risks and turn challenges into competitive advantages."
                : "Proteção jurídica estratégica para empresas que querem crescer com segurança, prevenir riscos e transformar desafios em vantagem competitiva."}
            </p>
          </div>
        </div>
      </section>

      {/* Summary Grid with Icons */}
      <section className="section-padding bg-muted/30">
        <div className="container-site">
          <div className="text-center mb-10 animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === "en"
                ? "Every business faces legal challenges. The difference is having the right team to turn risks into strategy. Explore what we do:"
                : "Toda empresa enfrenta desafios jurídicos. A diferença está em ter a equipe certa para transformar riscos em estratégia. Conheça nossas frentes de atuação:"}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { icon: Scale, label: language === "en" ? "Judicial Recovery" : "Recuperação Judicial" },
              { icon: ShieldCheck, label: language === "en" ? "Risk Prevention" : "Prevenção de Riscos" },
              { icon: FileText, label: language === "en" ? "Contracts" : "Contratos" },
              { icon: Rocket, label: language === "en" ? "Startups" : "Startups" },
              { icon: Stamp, label: language === "en" ? "Intellectual Property" : "Propriedade Intelectual" },
              { icon: ClipboardCheck, label: language === "en" ? "Compliance" : "Compliance" },
              { icon: Users, label: language === "en" ? "Succession" : "Planejamento Sucessório" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-background border border-accent/10 hover:border-accent/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <item.icon className="w-7 h-7 text-accent" />
                <span className="text-xs sm:text-sm font-medium text-foreground leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl mx-auto space-y-14">

            {/* 1 - Recuperação Judicial */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Recuperação Judicial e Extrajudicial</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que isso importa para sua empresa?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Quando a crise financeira bate à porta, muitos empresários acreditam que o fim é inevitável. Não é. A recuperação judicial existe para permitir que empresas viáveis reorganizem suas dívidas, preservem empregos e retomem a operação — sem encerrar as atividades.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A diferença entre recuperação e falência é, acima de tudo, uma questão de tempo e estratégia. A falência encerra. A recuperação reconstrói. E a recuperação extrajudicial permite negociar diretamente com credores, de forma mais ágil e discreta, sem a exposição de um processo público.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                O papel do advogado empresarial aqui é decisivo: elaborar um plano de reestruturação sólido, negociar condições viáveis e transformar credores em aliados da recuperação. Empresas que agem rápido e com orientação especializada sobrevivem. As que hesitam, perdem essa janela.
              </p>
            </div>

            {/* 2 - Prevenção de Riscos */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Prevenção de Riscos e Atuação Preventiva</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que prevenir custa menos do que remediar?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A maioria dos litígios empresariais que chegam ao Judiciário poderiam ter sido evitados. Contratos mal redigidos, ausência de governança, processos internos frágeis — problemas que parecem pequenos até gerarem prejuízos milionários.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A assessoria jurídica preventiva identifica vulnerabilidades antes que se tornem crises. Implementa programas de compliance, estrutura processos de governança e garante que cada decisão do negócio esteja juridicamente sustentada.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Ter um advogado empresarial ao lado do negócio não é despesa — é o investimento que separa empresas que crescem com segurança daquelas que vivem apagando incêndios.
              </p>
            </div>

            {/* 3 - Contratos */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Contratos Empresariais</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que um contrato genérico pode destruir seu negócio?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Modelos prontos da internet ignoram a realidade específica de cada empresa. Cláusulas de rescisão mal redigidas, ausência de penalidades, omissão sobre propriedade intelectual e falta de definição sobre foro competente são erros que custam fortunas quando o conflito aparece.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Um contrato personalizado prevê o que pode dar errado, distribui responsabilidades com clareza e cria mecanismos de resolução antes que qualquer disputa precise de um juiz. Cada negociação é única — o contrato que a protege também precisa ser.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Nossos contratos não são documentos jurídicos genéricos. São ferramentas de proteção desenhadas sob medida para a realidade de cada operação.
              </p>
            </div>

            {/* 4 - Startups e Estruturação Societária */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Startups e Estruturação Societária</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que startups promissoras fracassam por falta de estrutura jurídica?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Três fundadores criam um produto inovador, captam investimento e, meses depois, discordam sobre participação, vesting e poder de decisão. Sem acordo de sócios, sem cláusula de não competição, o investidor recua e o negócio trava. Isso acontece todos os dias.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Estruturação societária, acordo de sócios, due diligence e captação de investimentos são os alicerces que permitem ao negócio escalar sem implodir. O advogado empresarial não é obstáculo à inovação — é o arquiteto da viabilidade do projeto.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Atuamos desde a constituição da sociedade até rodadas de investimento, garantindo que o crescimento aconteça sobre bases jurídicas sólidas.
              </p>
            </div>

            {/* 5 - Propriedade Intelectual */}
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Propriedade Intelectual e Proteção de Marca</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que sua marca é seu patrimônio mais vulnerável?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Uma empresa consolida sua marca ao longo de anos e descobre que um concorrente registrou nome semelhante no INPI. A disputa judicial custa mais do que o registro preventivo jamais teria custado. Marcas, patentes, direitos autorais e segredos industriais precisam de proteção ativa e contínua.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Registrar sua marca não é formalidade — é a certidão de nascimento da identidade do seu negócio. Sem proteção, qualquer um pode reivindicar o que você construiu. Cuidamos do registro, monitoramento e defesa da sua propriedade intelectual.
              </p>
            </div>

            {/* 6 - Compliance */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Compliance e Governança Corporativa</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que compliance não é opcional?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Programas de compliance deixaram de ser diferenciais — são exigências do mercado, dos investidores e da legislação. A responsabilidade dos administradores é pessoal e pode ultrapassar os limites da empresa. Um problema de governança não afeta apenas o balanço: destrói relações comerciais, afasta talentos e compromete a reputação de forma duradoura.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Implementamos programas de compliance sob medida, treinamos equipes e criamos mecanismos de controle que protegem a empresa e as pessoas que a conduzem.
              </p>
            </div>

            {/* 7 - Sucessório */}
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Planejamento Sucessório e Empresas Familiares</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que menos de um terço das empresas familiares sobrevivem à segunda geração?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conflitos entre herdeiros, ausência de holdings, governança improvisada e patrimônio misturado com pessoa física destroem em meses o que foi construído em décadas. Planejamento sucessório não é sobre herança — é sobre continuidade. É garantir que o negócio prospere nas mãos de quem o dará sequência.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Estruturamos holdings, definimos regras de governança familiar e criamos mecanismos que previnem disputas e garantem a perenidade do negócio.
              </p>
            </div>

            {/* Closing - Why Us */}
            <div className="animate-fade-in border-t border-accent/20 pt-10" style={{ animationDelay: "0.8s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Por que contar com a nossa equipe?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Porque não oferecemos apenas soluções jurídicas — oferecemos visão de negócio. Nossa equipe pensa a empresa do cliente como um todo: entende a operação, antecipa riscos, desenha estratégias e constrói a arquitetura legal que transforma vulnerabilidade em vantagem competitiva.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Atuamos de forma preventiva e estratégica, lado a lado com empresários, gestores e departamentos jurídicos que entendem que o Direito Empresarial não é sobre leis — é sobre decisões que definem o futuro do negócio.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
                Sua empresa merece uma assessoria que evolua com ela.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CTASection 
        title={language === "en" ? "Ready to protect and grow your business?" : "Pronto para proteger e fazer seu negócio evoluir?"} 
        description={language === "en" 
          ? "Talk to our specialists and discover how strategic legal counsel can transform your company's future."
          : "Fale com nossos especialistas e descubra como a assessoria jurídica estratégica pode transformar o futuro da sua empresa."} 
      />
    </Layout>
  );
}
