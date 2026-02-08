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
              What practice taught us about Corporate Law
            </h2>

            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed text-mobile-justified max-w-3xl mx-auto">
              <p>
                We have seen contracts that nearly destroyed partnerships built over decades. Startups that lost investors
                because they lacked proper legal structure. Brands copied overnight due to the absence of a simple trademark registration.
              </p>
              <p>
                We have watched crises that could have been avoided with governance adjustments —
                and family businesses that fragmented because no one planned for succession.
              </p>
              <p className="text-foreground font-medium">
                Each of these stories shaped who we are.
              </p>
              <p>
                Our specialization in Corporate Law was not born in a classroom. It was forged in practice,
                in late-night calls, in restructurings that saved companies, in the strategies that turned risk into growth.
              </p>
              <p className="font-serif text-lg md:text-xl text-foreground/90 italic border-l-2 border-accent/40 pl-6 text-left">
                We exist to protect what you've built — and to prepare the ground for what you will build next.
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
            O que a prática nos ensinou sobre Direito Empresarial
          </h2>

          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed text-mobile-justified max-w-3xl mx-auto">
            <p>
              Já vimos contratos que quase destruíram sociedades construídas ao longo de décadas.
              Startups que perderam investidores porque não tinham estrutura jurídica adequada.
              Marcas copiadas da noite para o dia pela ausência de um simples registro.
            </p>
            <p>
              Acompanhamos crises que poderiam ter sido evitadas com ajustes de governança —
              e empresas familiares que se fragmentaram porque ninguém planejou a sucessão.
            </p>
            <p className="text-foreground font-medium">
              Cada uma dessas histórias moldou quem somos.
            </p>
            <p>
              Nossa especialização em Direito Empresarial não nasceu na teoria. Foi forjada na prática,
              nas ligações de madrugada, nas reestruturações que salvaram empresas,
              nas estratégias que transformaram risco em crescimento.
            </p>
            <p className="font-serif text-lg md:text-xl text-foreground/90 italic border-l-2 border-accent/40 pl-6 text-left">
              Existimos para proteger o que você construiu — e preparar o terreno para o que ainda vai construir.
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
