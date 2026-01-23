interface QuoteBandProps {
  quote: string;
  author: string;
}

export function QuoteBand({ quote, author }: QuoteBandProps) {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="container-site">
        <blockquote className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl lg:text-3xl italic text-foreground leading-relaxed">
            "{quote}"
          </p>
          <footer className="mt-6">
            <cite className="not-italic text-muted-foreground font-medium">
              — {author}
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
