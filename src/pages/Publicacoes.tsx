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
  getPublicationsSortedByDate 
} from "@/data/publications";

export default function Publicacoes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");

  const sortedPosts = useMemo(() => getPublicationsSortedByDate(), []);

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "Todas" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [sortedPosts, searchTerm, activeCategory]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <PageHero
        title="Atualizações Jurídicas"
        description="Artigos, notícias e análises sobre legislação, tributação e impactos no mundo dos negócios."
        breadcrumb={[{ label: "Publicações" }]}
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
                placeholder="Buscar publicações..."
                className="pl-11 h-12 bg-card border-border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
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
              {filteredPosts.length} {filteredPosts.length === 1 ? "publicação encontrada" : "publicações encontradas"}
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
                Nenhuma publicação encontrada
              </p>
              <p className="text-muted-foreground/70 text-sm">
                Tente ajustar os filtros ou termos de busca.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("Todas");
                }}
                className="mt-4 text-accent hover:underline text-sm font-medium"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
