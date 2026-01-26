interface QuoteBandProps {
  quote: string;
  author?: string;
}
export function QuoteBand({
  quote,
  author
}: QuoteBandProps) {
  return <section className="py-10 md:py-12 bg-secondary">
      <div className="container-site">
        <div className="rounded-lg px-6 py-4 md:px-8 md:py-5 max-w-3xl mx-auto bg-secondary">
          <blockquote className="flex items-center justify-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
            <p className="font-serif text-lg italic leading-relaxed md:text-4xl text-secondary-foreground text-center">
              "{quote}"
            </p>
          </blockquote>
          {author && <footer className="mt-3 text-center">
              <cite className="not-italic text-white/60 text-sm font-medium">
                — {author}
              </cite>
            </footer>}
        </div>
      </div>
    </section>;
}