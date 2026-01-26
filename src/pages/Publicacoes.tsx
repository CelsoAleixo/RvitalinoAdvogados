import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Tag, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import publicationsHero from "@/assets/publications-hero.jpg";
import { 
  publications, 
  categories, 
  getPublicationUrl,
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
                <article className="group mb-12 bg-card rounded-lg border border-border overflow-hidden hover:border-accent/40 transition-all duration-300">
                  <div className="p-8 md:p-10">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded uppercase tracking-wider">
                        <Tag className="h-3 w-3" />
                        {featuredPost.category}
                      </span>
                    </div>

                    {/* Title */}
                    <Link to={getPublicationUrl(featuredPost)}>
                      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground group-hover:text-accent transition-colors leading-tight cursor-pointer">
                        {featuredPost.title}
                      </h2>
                    </Link>

                    {/* Subtitle */}
                    {featuredPost.subtitle && (
                      <p className="text-lg text-accent/80 font-medium mb-4">
                        {featuredPost.subtitle}
                      </p>
                    )}

                    {/* Excerpt */}
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6 max-w-3xl">
                      {featuredPost.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString("pt-BR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      
                      <Link
                        to={getPublicationUrl(featuredPost)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded font-medium hover:bg-accent/90 transition-colors"
                      >
                        Ler artigo completo
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              )}

              {/* Remaining Posts Grid */}
              {remainingPosts.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {remainingPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group bg-card rounded-lg border border-border p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                    >
                      {/* Category & Date */}
                      <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground mb-4">
                        <button
                          onClick={() => {
                            setActiveCategory(post.category);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="flex items-center gap-1.5 px-2 py-0.5 bg-secondary rounded text-xs font-medium hover:text-accent transition-colors"
                        >
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </button>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.date).toLocaleDateString("pt-BR", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      {/* Title */}
                      <Link to={getPublicationUrl(post)}>
                        <h3 className="font-serif text-lg md:text-xl mb-3 text-foreground group-hover:text-accent transition-colors leading-snug cursor-pointer line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read more */}
                      <Link
                        to={getPublicationUrl(post)}
                        className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
                      >
                        Ler mais
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </article>
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
