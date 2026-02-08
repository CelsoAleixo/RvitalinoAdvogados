import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Flame, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function StorytellingIntro() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const subtitle = isEn
    ? "Where law meets the real life of businesses"
    : "Onde o Direito encontra a vida real das empresas";

  const label = isEn ? "Our Story" : "Nossa História";

  const paragraphs = isEn
    ? [
        "Partnerships that crumbled over a forgotten clause. Brilliant startups that lost investments because nobody built the legal foundation. Brands forged through years of effort, copied in hours. Family businesses that fragmented for lack of planning. Operations that nearly collapsed without compliance. Promising ventures that only survived because Judicial Recovery arrived in time.",
        "None of this is theory. These are real stories we witnessed firsthand — and they shaped how we see Corporate Law.",
        "Living these scenarios side by side with entrepreneurs, we understood our role goes far beyond interpreting laws. It lies in anticipating risks before they become crises, structuring partnerships to prevent conflicts, building contracts that protect present and future, shielding brands and intellectual assets, strengthening governance, guiding startups through their first steps, and redesigning paths when a company needs to breathe to be reborn.",
      ]
    : [
        "Ao longo da nossa trajetória, fortalecemos sociedades, estruturamos startups que hoje atraem investimentos, blindamos marcas que se tornaram líderes em seus mercados e implementamos governança que transformou operações inteiras. Em cada área do Direito Empresarial, deixamos um rastro de segurança, estratégia e crescimento.\n\nE quando o desafio foi maior, fomos ainda melhores. Conduzimos Recuperações Judiciais que salvaram empresas, preservaram empregos e devolveram futuro a negócios que muitos já davam por perdidos. Transformamos crises em reestruturação, e reestruturação em novos ciclos de prosperidade.",
        "Nada disso é teoria. São histórias reais que acompanhamos de perto — e que moldaram a forma como enxergamos o Direito Empresarial.",
        "Foi vivendo esses cenários, lado a lado com empresários, que entendemos que nosso papel vai muito além de interpretar leis. Ele está em antecipar riscos antes que se tornem crises, estruturar sociedades para evitar conflitos, construir contratos que protegem o presente e o futuro, blindar marcas e ativos intelectuais, fortalecer a governança, orientar startups em seus primeiros passos e redesenhar caminhos quando a empresa precisa respirar para renascer.",
      ];

  const highlightText = isEn
    ? "We are not just lawyers. We are guardians of what you've built — and architects of what you will build next."
    : "Não somos apenas advogados. Somos guardiões do que você construiu — e arquitetos do que você ainda vai construir.";

  const closingText = isEn
    ? "Our expertise was forged in practice: in late-night calls, in restructurings that saved companies, in strategies that turned risk into growth. We exist because we learned that Corporate Law isn't about putting out fires — it's about making sure they never start."
    : "Nossa expertise foi forjada na prática: nas ligações de madrugada, nas reestruturações que salvaram empresas, nas estratégias que transformaram risco em crescimento. Existimos porque aprendemos que o Direito Empresarial não é sobre apagar incêndios — é sobre garantir que eles nunca comecem.";

  const ctaText = isEn ? "Discover our practice areas" : "Conheça nossas áreas de atuação";

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative z-10 max-w-5xl">
        {/* Label */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent border border-accent/20 rounded-full px-4 py-1.5 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {label}
          </span>
        </div>

        {/* Title */}
        <h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-center leading-[1.15] mb-12 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-accent">{subtitle}</span>
        </h2>

        {/* Two-column narrative layout */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 mb-12">
          {/* Left column */}
          <div
            className="space-y-5 animate-fade-in md:pr-10"
            style={{ animationDelay: "0.2s" }}
          >
            {paragraphs[0].split("\n\n").map((part, j) => (
              <p key={j} className="text-base md:text-lg text-muted-foreground leading-relaxed text-mobile-justified">
                {part}
              </p>
            ))}
            <p className="text-base md:text-lg text-foreground/90 font-medium leading-relaxed">
              {paragraphs[1]}
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:flex flex-col items-center">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
          </div>

          {/* Right column */}
          <div
            className="space-y-5 animate-fade-in md:pl-10"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-mobile-justified">
              {paragraphs[2]}
            </p>
          </div>
        </div>

        {/* Highlight card */}
        <div
          className="animate-fade-in relative rounded-2xl overflow-hidden mb-6"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10" />
          <div className="absolute inset-0 border border-accent/20 rounded-2xl" />
          <div className="relative px-8 py-7 flex items-start gap-5">
            <div className="shrink-0 mt-1 p-2.5 rounded-xl bg-accent/15">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl font-serif text-foreground leading-relaxed">
              {highlightText}
            </p>
          </div>
        </div>

        {/* Closing quote */}
        <div
          className="animate-fade-in rounded-2xl bg-secondary/40 border-l-[3px] border-accent/40 px-8 py-6 flex items-start gap-5 mb-10"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="shrink-0 mt-1">
            <Flame className="h-5 w-5 text-accent/70" />
          </div>
          <p className="font-serif text-base md:text-lg text-foreground/80 italic leading-relaxed">
            {closingText}
          </p>
        </div>

        {/* CTA */}
        <div
          className="flex justify-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button asChild variant="outline" className="group border-accent/30 hover:bg-accent/10 hover:border-accent/50">
            <Link to="/atuacao" className="flex items-center gap-2 text-accent">
              {ctaText}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
