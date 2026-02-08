import { useLanguage } from "@/contexts/LanguageContext";
import { Quote, Shield, Flame } from "lucide-react";

export function StorytellingIntro() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const title = isEn
    ? "Born from practice, built on real cases"
    : "Nasceu da prática, construída em casos reais";

  const blocks = isEn
    ? [
        {
          text: "Over the years, we've seen contracts destroy partnerships, startups lose investors for lack of structure, and brands copied overnight. Each of these stories shaped who we are.",
        },
        {
          highlight: true,
          icon: Shield,
          text: "We are not just lawyers. We are guardians of continuity, security and business strategy.",
        },
        {
          quote: true,
          icon: Flame,
          text: "We exist to protect what you've built — and to prepare the ground for what you will build next.",
        },
      ]
    : [
        {
          text: "Ao longo dos anos, vimos contratos destruírem sociedades, startups perderem investidores por falta de estrutura e marcas serem copiadas da noite para o dia. Cada uma dessas histórias moldou quem somos.",
        },
        {
          highlight: true,
          icon: Shield,
          text: "Não somos apenas advogados. Somos guardiões da continuidade, da segurança e da estratégia empresarial.",
        },
        {
          quote: true,
          icon: Flame,
          text: "Existimos para proteger o que você construiu — e preparar o terreno para o que ainda vai construir.",
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
