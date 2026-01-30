import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Publication, getPublicationUrl } from "@/data/publications";
import { useLanguage } from "@/contexts/LanguageContext";

// Default author when publication doesn't have a specific authorSection
const DEFAULT_AUTHOR = {
  name: "Dra. Ana Caroline Ianuck",
  shortName: "Ana Caroline Ianuck",
};

interface PublicationCardProps {
  publication: Publication;
  variant?: "default" | "featured" | "compact";
  onCategoryClick?: (category: string) => void;
}

export function PublicationCard({ publication, variant = "default", onCategoryClick }: PublicationCardProps) {
  const { language, t } = useLanguage();
  const authorName = publication.authorSection?.name || DEFAULT_AUTHOR.name;
  
  // Get localized content
  const title = language === 'en' ? publication.titleEn : publication.title;
  const subtitle = language === 'en' ? publication.subtitleEn : publication.subtitle;
  const excerpt = language === 'en' ? publication.excerptEn : publication.excerpt;
  const category = language === 'en' ? publication.categoryEn : publication.category;
  
  const formattedDate = new Date(publication.date).toLocaleDateString(language === 'en' ? "en-US" : "pt-BR", {
    day: "numeric",
    month: variant === "featured" ? "long" : "short",
    year: "numeric",
  });

  if (variant === "featured") {
    return (
      <article className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent/40 transition-all duration-300">
        <div className="p-8 md:p-10">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded uppercase tracking-wider">
              {category}
            </span>
          </div>

          {/* Title */}
          <Link to={getPublicationUrl(publication)}>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground group-hover:text-accent transition-colors leading-tight cursor-pointer">
              {title}
            </h2>
          </Link>

          {/* Subtitle */}
          {subtitle && <p className="text-lg text-accent/80 font-medium mb-4">{subtitle}</p>}

          {/* Excerpt */}
          <p className="text-muted-foreground leading-relaxed text-lg mb-6 max-w-3xl">{excerpt}</p>

          {/* Footer with Author */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
            <div className="flex items-center gap-4">
              {/* Author */}
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-accent" />
                </div>
                <span className="text-foreground font-medium">{authorName}</span>
              </div>
              <span className="text-muted-foreground/50">•</span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
            </div>

            <Link
              to={getPublicationUrl(publication)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded font-medium hover:bg-accent/90 transition-colors"
            >
              {language === 'en' ? 'Read full article' : 'Ler artigo completo'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        to={getPublicationUrl(publication)}
        className="group bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
      >
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">{category}</span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {formattedDate}
          </span>
        </div>
        <h3 className="font-serif text-lg mb-3 group-hover:text-accent transition-colors line-clamp-2 flex-grow">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{excerpt}</p>

        {/* Author & Read more Row */}
        <div className="flex items-center justify-between gap-2 pt-4 border-t border-border mt-auto">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <User className="h-3.5 w-3.5 text-accent" />
            <span className="truncate max-w-[120px]">{authorName}</span>
          </div>
          <div className="flex items-center gap-2 text-accent text-sm font-medium">
            <span>{language === 'en' ? 'Read more' : 'Ler mais'}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <article className="group bg-card rounded-xl border border-border p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Category & Date */}
      <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground mb-4">
        {onCategoryClick ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              onCategoryClick(publication.category);
            }}
            className="flex items-center gap-1.5 px-2 py-0.5 bg-secondary rounded text-xs font-medium hover:text-accent transition-colors"
          >
            {category}
          </button>
        ) : (
          <span className="flex items-center gap-1.5 px-2 py-0.5 bg-secondary rounded text-xs font-medium">
            {category}
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          {formattedDate}
        </span>
      </div>

      {/* Title */}
      <Link to={getPublicationUrl(publication)}>
        <h3 className="font-serif text-lg md:text-xl mb-3 text-foreground group-hover:text-accent transition-colors leading-snug cursor-pointer line-clamp-2">
          {title}
        </h3>
      </Link>

      {/* Excerpt */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">{excerpt}</p>

      {/* Author & Read more */}
      <div className="flex items-center justify-between gap-2 pt-4 border-t border-border mt-auto">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <User className="h-3.5 w-3.5 text-accent" />
          <span className="truncate max-w-[140px]">{authorName}</span>
        </div>
        <Link
          to={getPublicationUrl(publication)}
          className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
        >
          {language === 'en' ? 'Read more' : 'Ler mais'}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
