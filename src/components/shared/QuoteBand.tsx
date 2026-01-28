interface QuoteBandProps {
  quote: string;
  author?: string;
}
export function QuoteBand({
  quote,
  author
}: QuoteBandProps) {
  return (
    <section className="py-16 bg-accent/10 border-y border-accent/20">
      <div className="container-site text-center">
        <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic max-w-4xl mx-auto">
          "{quote}"
        </blockquote>
        {author && (
          <p className="mt-4 text-accent font-medium">— {author}</p>
        )}
      </div>
    </section>
  );
}