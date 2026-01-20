import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import LazyPropertyCard from "@/components/LazyPropertyCard";
import LoadMoreButton from "@/components/LoadMoreButton";
import { cssProperties, type Category } from "@/data/cssProperties";
import { useLazyLoad } from "@/hooks/useLazyLoad";
import { BookOpen, Sparkles } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");

  const filteredProperties = useMemo(() => {
    return cssProperties.filter((property) => {
      const matchesSearch =
        property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.values.some((v) => v.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "all" || property.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const { displayedItems, hasMore, remainingCount, loadMore, isLoading } = useLazyLoad({
    items: filteredProperties,
    initialCount: 12,
    incrementCount: 12,
  });

  return (
    <main className="min-h-screen relative" role="main">
      {/* Background glow effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <Header />

        <nav className="space-y-8 mb-12" aria-label="Property filters">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search properties, values, or descriptions..."
          />
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
        </nav>

        {/* Results count with live region for accessibility */}
        <div 
          className="flex items-center justify-between gap-2 text-sm text-muted-foreground mb-6"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span>
              {filteredProperties.length} {filteredProperties.length === 1 ? "property" : "properties"} found
            </span>
          </div>
          {hasMore && (
            <span className="text-xs opacity-70">
              Showing {displayedItems.length} of {filteredProperties.length}
            </span>
          )}
        </div>

        {/* Property grid */}
        {displayedItems.length > 0 ? (
          <>
            <section 
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              aria-label="CSS Properties"
            >
              {displayedItems.map((property, index) => (
                <LazyPropertyCard key={property.name} property={property} index={index} />
              ))}
            </section>
            
            {hasMore && (
              <LoadMoreButton 
                onClick={loadMore} 
                remainingCount={remainingCount} 
                isLoading={isLoading}
              />
            )}
          </>
        ) : (
          <div className="text-center py-20 animate-fade-in" role="status">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-4">
              <BookOpen className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-medium mb-2">No properties found</h2>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span>Built for developers who love CSS</span>
            <Sparkles className="h-4 w-4 text-primary animate-pulse" aria-hidden="true" />
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
