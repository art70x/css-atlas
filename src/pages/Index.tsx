import { useState, useMemo } from 'react'
import Header from '@/components/header'
import SearchBar from '@/components/search-bar'
import CategoryFilter from '@/components/category-filter'
import LazyPropertyCard from '@/components/lazy-property-card'
import LoadMoreButton from '@/components/load-more-button'
import { cssProperties, type Category, type CSSProperty } from '@/data/cssProperties'
import { useLazyLoad } from '@/hooks/use-lazy-load'
import { BookOpen, Sparkles } from 'lucide-react'

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')

  const filteredProperties = useMemo(() => {
    return cssProperties.filter((property: CSSProperty) => {
      const matchesSearch =
        property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.values.some((v) => v.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === 'all' || property.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const { displayedItems, hasMore, remainingCount, loadMore, isLoading } = useLazyLoad({
    items: filteredProperties,
    initialCount: 12,
    incrementCount: 12,
  })

  return (
    <main className="relative min-h-screen" role="main">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 animate-pulse rounded-full bg-primary/5 blur-3xl"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute right-0 bottom-0 h-[400px] w-[400px] animate-pulse rounded-full bg-accent/5 blur-3xl"
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <Header />

        <nav className="mb-12 space-y-8" aria-label="Property filters">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search properties, values, or descriptions..."
          />
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
        </nav>

        {/* Results count */}
        <div
          className="mb-6 flex items-center justify-between gap-2 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span>
              {filteredProperties.length}{' '}
              {filteredProperties.length === 1 ? 'property' : 'properties'} found
            </span>
          </div>
          {hasMore && (
            <span className="text-xs opacity-70">
              Showing {displayedItems.length} of {filteredProperties.length}
            </span>
          )}
        </div>

        {/* Property grid or empty state */}
        {displayedItems.length > 0 ? (
          <>
            <section
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              aria-label="CSS Properties"
            >
              {displayedItems.map((property: CSSProperty, index: number) => (
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
          <div className="animate-fade-in py-20 text-center" role="status">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted/50">
              <BookOpen className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
            </div>
            <h2 className="mb-2 text-lg font-medium">No properties found</h2>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 border-t border-border/50 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built for developers who love CSS</span>
            <Sparkles className="h-4 w-4 animate-pulse text-primary" aria-hidden="true" />
          </p>
        </footer>
      </div>
    </main>
  )
}

export default Index
