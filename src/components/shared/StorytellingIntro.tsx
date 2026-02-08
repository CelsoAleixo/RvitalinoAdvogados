import { useLanguage } from "@/contexts/LanguageContext";
import { Quote, ArrowDown, Shield, Eye, Flame } from "lucide-react";

export function StorytellingIntro() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const title = isEn
    ? "Our expertise is the result of years protecting businesses in real scenarios"
    : "Nossa especialização é fruto de anos protegendo empresas em cenários reais";

  const blocks = isEn
    ? [
        {
          text: "Every company carries a story. Some are born from a bold idea, others from an urgent need, and others from a long-held dream that finally found space to exist. But over the years serving entrepreneurs, we noticed something that repeats in every scenario: a business's success never depends solely on vision or courage — it depends on well-made legal decisions.",
        },
        {
          text: "It was by witnessing contracts that nearly destroyed partnerships, startups that lost investors due to lack of structure, brands copied for lack of registration, companies that could have avoided crises with a simple governance adjustment, and families that watched their businesses fragment due to the absence of planning — that we understood our role.",
        },
        {
          highlight: true,
          icon: Shield,
          text: "We are not just lawyers. We are guardians of continuity, security and business strategy.",
        },
        {
          text: "Our specialization was born from practice. From real cases. From real companies. From problems that could have been prevented — and from solutions that turned risks into growth.",
        },
        {
          icon: Eye,
          text: "We learned that Corporate Law is not about putting out fires, but about preventing them from starting. It's about seeing what the entrepreneur hasn't seen yet. It's about protecting what they've built and preparing the ground for what they will build next.",
        },
        {
          quote: true,
          icon: Flame,
          text: "That's why we are specialists: because we live the daily life of companies, understand their challenges, and know exactly where law meets strategy. And it is in that meeting that our work is born.",
        },
      ]
    : [
        {
          text: "Toda empresa carrega uma história. Algumas nascem de uma ideia ousada, outras de uma necessidade urgente, outras ainda de um sonho antigo que finalmente encontrou espaço para existir. Mas, ao longo dos anos atendendo empresários, percebemos algo que se repete em todos os cenários: o sucesso de um negócio nunca depende apenas de visão ou coragem — depende de decisões jurídicas bem tomadas.",
        },
        {
          text: "Foi observando contratos que quase arruinaram sociedades, startups que perderam investidores por falta de estrutura, marcas copiadas por falta de registro, empresas que poderiam ter evitado crises com um simples ajuste de governança, e famílias que viram seus negócios se fragmentarem por ausência de planejamento, que entendemos nosso papel.",
        },
        {
          highlight: true,
          icon: Shield,
          text: "Não somos apenas advogados. Somos guardiões da continuidade, da segurança e da estratégia empresarial.",
        },
        {
          text: "Nossa especialização nasceu da prática. De casos reais. De empresas reais. De problemas que poderiam ter sido evitados — e de soluções que transformaram riscos em crescimento.",
        },
        {
          icon: Eye,
          text: "Aprendemos que o Direito Empresarial não é sobre apagar incêndios, mas sobre impedir que eles comecem. É sobre enxergar o que o empresário ainda não viu. É sobre proteger o que ele construiu e preparar o terreno para o que ainda vai construir.",
        },
        {
          quote: true,
          icon: Flame,
          text: "É por isso que somos especialistas: porque vivemos o cotidiano das empresas, entendemos seus desafios e sabemos exatamente onde a lei encontra a estratégia. E é nesse encontro que nasce o nosso trabalho.",
        },
      ];

  return (
    <section className="section-padding bg-card/50 border-y border-border/30">
      <div className="container-site max-w-4xl">
        {/* Header */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
            <Quote className="h-6 w-6 text-accent" />
          </div>
        </div>

        <h2
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-accent leading-tight text-center mb-10 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {title}
        </h2>

        {/* Blocks */}
        <div className="space-y-5 max-w-3xl mx-auto">
          {blocks.map((block, i) => {
            const delay = `${0.15 + i * 0.08}s`;
            const Icon = block.icon;

            if (block.highlight) {
              return (
                <div
                  key={i}
                  className="animate-fade-in rounded-xl bg-accent/10 border border-accent/20 px-6 py-5 flex items-start gap-4"
                  style={{ animationDelay: delay }}
                >
                  {Icon && (
                    <div className="shrink-0 mt-0.5">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  )}
                  <p className="text-foreground font-medium text-lg md:text-xl leading-relaxed">
                    {block.text}
                  </p>
                </div>
              );
            }

            if (block.quote) {
              return (
                <div
                  key={i}
                  className="animate-fade-in rounded-xl bg-secondary/60 border-l-2 border-accent/40 px-6 py-5 flex items-start gap-4"
                  style={{ animationDelay: delay }}
                >
                  {Icon && (
                    <div className="shrink-0 mt-0.5">
                      <Icon className="h-5 w-5 text-accent/70" />
                    </div>
                  )}
                  <p className="font-serif text-lg md:text-xl text-foreground/90 italic leading-relaxed">
                    {block.text}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={i}
                className="animate-fade-in rounded-xl bg-secondary/30 px-6 py-5 flex items-start gap-4"
                style={{ animationDelay: delay }}
              >
                {Icon && (
                  <div className="shrink-0 mt-1">
                    <Icon className="h-5 w-5 text-accent/60" />
                  </div>
                )}
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-mobile-justified">
                  {block.text}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="flex justify-center mt-10 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <ArrowDown className="h-5 w-5 text-accent/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
