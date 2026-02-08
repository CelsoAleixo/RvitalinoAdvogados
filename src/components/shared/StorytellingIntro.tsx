import { useLanguage } from "@/contexts/LanguageContext";
import { Quote, Shield, Flame } from "lucide-react";

export function StorytellingIntro() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const title = isEn
    ? "Where law meets the real life of businesses"
    : "Onde o Direito encontra a vida real das empresas";

  const blocks = isEn
    ? [
        {
          text: "Partnerships undone by a poorly drafted clause. Brands built over years, copied overnight. Investors who walked away because nobody structured the deal. Family businesses that crumbled in silence, without a succession plan. These aren't hypothetical scenarios — they are stories we lived alongside our clients. And it was from each of them that our way of practicing law was born.",
        },
        {
          highlight: true,
          icon: Shield,
          text: "We are not just lawyers. We are guardians of what you've built — and architects of what you will build next.",
        },
        {
          quote: true,
          icon: Flame,
          text: "Our expertise was forged in practice: in late-night calls, in restructurings that saved companies, in strategies that turned risk into growth. We exist because we learned that Corporate Law isn't about putting out fires — it's about making sure they never start.",
        },
      ]
    : [
        {
          text: "Sociedades desfeitas por uma cláusula mal redigida. Marcas construídas ao longo de anos, copiadas da noite para o dia. Investidores que recuaram porque ninguém estruturou a operação. Empresas familiares que ruíram em silêncio, sem um plano de sucessão. Não são cenários hipotéticos — são histórias que vivemos ao lado dos nossos clientes. E foi de cada uma delas que nasceu a nossa forma de advogar.",
        },
        {
          highlight: true,
          icon: Shield,
          text: "Não somos apenas advogados. Somos guardiões do que você construiu — e arquitetos do que você ainda vai construir.",
        },
        {
          quote: true,
          icon: Flame,
          text: "Nossa expertise foi forjada na prática: nas ligações de madrugada, nas reestruturações que salvaram empresas, nas estratégias que transformaram risco em crescimento. Existimos porque aprendemos que o Direito Empresarial não é sobre apagar incêndios — é sobre garantir que eles nunca comecem.",
        },
      ];

  return (
    <section className="section-padding bg-card/50 border-y border-border/30">
      <div className="container-site max-w-4xl">
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
            <Quote className="h-6 w-6 text-accent" />
          </div>
        </div>

        <h2
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-accent leading-tight text-center mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {title}
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          {blocks.map((block, i) => {
            const delay = `${0.15 + i * 0.1}s`;
            const Icon = block.icon;

            if (block.highlight) {
              return (
                <div
                  key={i}
                  className="animate-fade-in rounded-xl bg-accent/10 border border-accent/20 px-6 py-5 flex items-start gap-4"
                  style={{ animationDelay: delay }}
                >
                  {Icon && <Icon className="h-6 w-6 text-accent shrink-0 mt-0.5" />}
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
                  {Icon && <Icon className="h-5 w-5 text-accent/70 shrink-0 mt-0.5" />}
                  <p className="font-serif text-lg md:text-xl text-foreground/90 italic leading-relaxed">
                    {block.text}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={i}
                className="animate-fade-in rounded-xl bg-secondary/30 px-6 py-5"
                style={{ animationDelay: delay }}
              >
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-mobile-justified">
                  {block.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
