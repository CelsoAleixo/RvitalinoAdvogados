import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { PublicationCard } from "@/components/shared/PublicationCard";
import { Input } from "@/components/ui/input";
import { Search, BookOpen } from "lucide-react";
import publicationsHero from "@/assets/publications-hero.jpg";
import { 
  categories,
  categoriesEn,
  getPublicationsSortedByDate 
} from "@/data/publications";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Publicacoes() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(language === 'pt' ? "Todas" : "All");

  const sortedPosts = useMemo(() => getPublicationsSortedByDate(), []);

  const filteredPosts = useMemo(() => {
    const allLabel = language === 'pt' ? "Todas" : "All";
    return sortedPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === allLabel || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [sortedPosts, searchTerm, activeCategory, language]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const displayCategories = language === 'pt' ? categories : categoriesEn;

  return (
    <Layout>
      <PageHero
        title={t("publications.heroTitle")}
        description={t("publications.heroDesc")}
        breadcrumb={[{ label: t("publications.title") }]}
        backgroundImage={publicationsHero}
      />

      <section className="section-padding">
        <div className="container-site">
          {/* Search and Filter Bar */}
          <div className="mb-12 space-y-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t("publications.search")}
                className="pl-11 h-12 bg-card border-border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {displayCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center gap-2 mb-8 text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm">
              {filteredPosts.length} {filteredPosts.length === 1 ? t("publications.found") : t("publications.foundPlural")}
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <PublicationCard 
                    publication={featuredPost} 
                    variant="featured"
                    onCategoryClick={handleCategoryClick}
                  />
                </div>
              )}

              {/* Remaining Posts Grid */}
              {remainingPosts.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {remainingPosts.map((post) => (
                    <PublicationCard
                      key={post.id}
                      publication={post}
                      variant="default"
                      onCategoryClick={handleCategoryClick}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-secondary/30 rounded-lg border border-border">
              <BookOpen className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg mb-2">
                {t("publications.noResults")}
              </p>
              <p className="text-muted-foreground/70 text-sm">
                {t("publications.noResultsDesc")}
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory(language === 'pt' ? "Todas" : "All");
                }}
                className="mt-4 text-accent hover:underline text-sm font-medium"
              >
                {t("publications.clearFilters")}
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}