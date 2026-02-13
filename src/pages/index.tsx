import Header from 'components/header'
import SearchBar from 'components/search-bar'
import CategoryFilter from 'components/category-filter'
import LazyPropertyCard from 'components/lazy-property-card'
import LoadMoreButton from 'components/load-more-button'
import Footer from 'components/footer'

const Index = () => {
  useSeo({
    meta: {
      title: 'CSS3 Reference for Developers',
      description:
        'CSS Atlas is the ultimate CSS reference with 180+ entries. Explore CSS3 properties, functions and modern features with syntax, examples, and browser support.',
      url: 'https://css3-atlas.vercel.app',
      shortDescription:
        'The ultimate CSS reference for developers. 180+ properties, modern functions, and syntax examples.',
    },
    image: {
      url: 'https://css3-atlas.vercel.app/og.png',
      alt: 'CSS Atlas: CSS3 Reference for Developers',
      height: 630,
      width: 1200,
    },
  })

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')

  const filteredProperties = useMemo(() => {
    return cssProperties.filter((property: CSSProperty) => {
      const matchesSearch =
        property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.values.some((v: string) => v.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === 'all' || property.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const { displayedItems, hasMore, remainingCount, loadMore, isLoading } = useLazyLoad({
    items: filteredProperties,
    initialCount: 12,
    incrementCount: 12,
  })

  const { toggleTheme } = useTheme()

  return (
    <main className="relative min-h-screen" role="main">
      {/* Theme Toggle */}
      <div className="fixed right-4 bottom-4 z-50">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="group relative inline-flex items-center gap-2 rounded-xl border border-border/50 bg-background/60 px-3 py-2 text-sm font-medium text-foreground/80 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-muted/60 hover:text-foreground focus:ring-2 focus:ring-primary/40 focus:outline-none"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <IHugeiconsSun02 className="absolute size-5 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
            <IHugeiconsMoon02 className="absolute size-5 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
          </span>
          <span className="hidden sm:inline">Toggle Theme</span>
        </button>
      </div>

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
            <IHugeiconsBookOpen01 className="size-4" aria-hidden="true" />
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
              <IHugeiconsBookOpen01 className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
            </div>
            <h2 className="mb-2 text-lg font-medium">No properties found</h2>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
        <Footer />
      </div>
    </main>
  )
}

export default Index
