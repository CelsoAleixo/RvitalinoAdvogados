import { useLanguage } from "@/contexts/LanguageContext";
import { Quote, ArrowDown } from "lucide-react";

export function StorytellingIntro() {
  const { language } = useLanguage();

  if (language === "en") {
    return (
      <section className="section-padding bg-card/50 border-y border-border/30">
        <div className="container-site max-w-4xl">
          <div className="flex justify-center mb-8">
            <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
              <Quote className="h-6 w-6 text-accent" />
            </div>
          </div>

          <div className="space-y-6 text-center">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-accent leading-tight">
              Our expertise is the result of years protecting businesses in real scenarios
            </h2>

            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed text-mobile-justified max-w-3xl mx-auto">
              <p>
                Every company carries a story. Some are born from a bold idea, others from an urgent need,
                and others from a long-held dream that finally found space to exist. But over the years serving
                entrepreneurs, we noticed something that repeats in every scenario: a business's success never
                depends solely on vision or courage — it depends on well-made legal decisions.
              </p>
              <p>
                It was by witnessing contracts that nearly destroyed partnerships, startups that lost investors
                due to lack of structure, brands copied for lack of registration, companies that could have
                avoided crises with a simple governance adjustment, and families that watched their businesses
                fragment due to the absence of planning — that we understood our role.
              </p>
              <p className="text-foreground font-medium text-lg md:text-xl">
                We are not just lawyers. We are guardians of continuity, security and business strategy.
              </p>
              <p>
                Our specialization was born from practice. From real cases. From real companies.
                From problems that could have been prevented — and from solutions that turned risks into growth.
              </p>
              <p>
                We learned that Corporate Law is not about putting out fires, but about preventing them from starting.
                It's about seeing what the entrepreneur hasn't seen yet.
                It's about protecting what they've built and preparing the ground for what they will build next.
              </p>
              <p className="font-serif text-lg md:text-xl text-foreground/90 italic border-l-2 border-accent/40 pl-6 text-left">
                That's why we are specialists: because we live the daily life of companies, understand their
                challenges, and know exactly where law meets strategy. And it is in that meeting that our work is born.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <ArrowDown className="h-5 w-5 text-accent/60 animate-bounce" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-card/50 border-y border-border/30">
      <div className="container-site max-w-4xl">
        <div className="flex justify-center mb-8">
          <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
            <Quote className="h-6 w-6 text-accent" />
          </div>
        </div>

        <div className="space-y-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-accent leading-tight">
            Nossa especialização é fruto de anos protegendo empresas em cenários reais
          </h2>

          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed text-mobile-justified max-w-3xl mx-auto">
            <p>
              Toda empresa carrega uma história. Algumas nascem de uma ideia ousada, outras de uma necessidade
              urgente, outras ainda de um sonho antigo que finalmente encontrou espaço para existir. Mas, ao
              longo dos anos atendendo empresários, percebemos algo que se repete em todos os cenários: o
              sucesso de um negócio nunca depende apenas de visão ou coragem — depende de decisões jurídicas
              bem tomadas.
            </p>
            <p>
              Foi observando contratos que quase arruinaram sociedades, startups que perderam investidores por
              falta de estrutura, marcas copiadas por falta de registro, empresas que poderiam ter evitado
              crises com um simples ajuste de governança, e famílias que viram seus negócios se fragmentarem
              por ausência de planejamento, que entendemos nosso papel.
            </p>
            <p className="text-foreground font-medium text-lg md:text-xl">
              Não somos apenas advogados. Somos guardiões da continuidade, da segurança e da estratégia empresarial.
            </p>
            <p>
              Nossa especialização nasceu da prática. De casos reais. De empresas reais.
              De problemas que poderiam ter sido evitados — e de soluções que transformaram riscos em crescimento.
            </p>
            <p>
              Aprendemos que o Direito Empresarial não é sobre apagar incêndios, mas sobre impedir que eles
              comecem. É sobre enxergar o que o empresário ainda não viu. É sobre proteger o que ele construiu
              e preparar o terreno para o que ainda vai construir.
            </p>
            <p className="font-serif text-lg md:text-xl text-foreground/90 italic border-l-2 border-accent/40 pl-6 text-left">
              É por isso que somos especialistas: porque vivemos o cotidiano das empresas, entendemos seus
              desafios e sabemos exatamente onde a lei encontra a estratégia. E é nesse encontro que nasce
              o nosso trabalho.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <ArrowDown className="h-5 w-5 text-accent/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
