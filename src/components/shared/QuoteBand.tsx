interface QuoteBandProps {
  quote: string;
  author?: string;
}

export function QuoteBand({ quote, author }: QuoteBandProps) {
  return (
    <section className="bg-accent/10 py-12 md:py-16">
      <div className="container-site text-center">
        <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-primary italic max-w-4xl mx-auto leading-relaxed">
          "{quote}"
        </blockquote>
        {author && (
          <cite className="block mt-4 text-sm text-muted-foreground not-italic">
            — {author}
          </cite>
        )}
      </div>
    </section>
  );
}