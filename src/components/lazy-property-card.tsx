import { Skeleton } from 'components/skeleton'
import SyntaxHighlight from 'components/syntax-highlight'

interface LazyPropertyCardProperties {
  property: CSSProperty
  index: number
}

const LazyPropertyCard = memo(({ property, index }: LazyPropertyCardProperties) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: '150px',
  })
  const [copied, setCopied] = useState(false)

  const copyExample = () => {
    navigator.clipboard.writeText(property.example)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <article
      ref={elementRef}
      className="group overflow-hidden rounded-xl border border-border/50 bg-card/60 shadow-card backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/90 hover:shadow-elevated"
      style={{
        animationDelay: `${Math.min(index * 50, 300)}ms`,
      }}
      itemScope
      itemType="https://schema.org/SoftwareSourceCode"
    >
      {isVisible ? (
        <div className="animate-fade-in p-6">
          {/* Header */}
          <header className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2
                className="mb-1 font-mono text-xl font-semibold text-card-foreground transition-colors group-hover:text-card-foreground/90"
                itemProp="name"
              >
                {property.name}
              </h2>
              <span className="inline-flex items-center rounded-md border border-border/50 bg-secondary/20 px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-transform duration-100 group-hover:scale-105">
                {property.category}
              </span>
            </div>
            <ILucideCode2 className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:rotate-12" />
          </header>

          {/* Description */}
          <p className="mb-5 text-sm/relaxed text-muted-foreground" itemProp="description">
            {property.description}
          </p>

          <div className="space-y-4">
            {/* Syntax */}
            <section>
              <div className="mb-2 flex items-center gap-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                <IHugeiconsBookOpen01 className="size-3.5" />
                <span>Syntax</span>
              </div>
              <SyntaxHighlight code={property.syntax} />
            </section>

            {/* Values */}
            {property.values.length > 0 && (
              <section>
                <div className="mb-2 flex items-center gap-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  <IHugeiconsLayers01 className="size-3.5" />
                  <span>Values</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {property.values.map((value: string, index_: number) => (
                    <span
                      key={index_}
                      className="inline-flex cursor-default items-center rounded-sm border border-border/30 bg-secondary/20 px-2 py-0.5 font-mono text-sm text-accent transition-all hover:scale-105 hover:border-accent/50"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Units */}
            {property.units && property.units.length > 0 && (
              <section>
                <div className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Units
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {property.units.map((unit: string, index_: number) => (
                    <span
                      key={index_}
                      className="inline-flex cursor-default items-center rounded-sm border border-border/30 bg-secondary/20 px-2 py-0.5 font-mono text-sm text-accent transition-all hover:scale-105 hover:border-accent/50"
                    >
                      {unit}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Example with Copy Button */}
            <section className="relative">
              <div className="mb-2 flex items-center justify-between text-xs font-medium tracking-wider text-muted-foreground uppercase">
                <span>Example</span>
                <button
                  onClick={copyExample}
                  className="flex items-center gap-1.5 rounded-md bg-secondary/40 px-2 py-1 transition-all duration-100 hover:scale-105 hover:bg-secondary/60 active:scale-95"
                  aria-label="Copy example code"
                >
                  {copied ? (
                    <>
                      <IHugeiconsCheckmarkCircle03 className="size-3 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <IHugeiconsCopy01 className="size-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div itemProp="programmingLanguage" content="CSS">
                <SyntaxHighlight code={property.example} />
              </div>
            </section>

            {/* Browser Support */}
            <footer className="border-t border-border/50 pt-3">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground transition-opacity group-hover:opacity-80">
                <IHugeiconsGlobe02 aria-hidden="true" />
                <span>{property.browserSupport}</span>
              </span>
            </footer>
          </div>
        </div>
      ) : (
        <div className="space-y-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-5 w-20" />
            </div>
            <Skeleton className="h-5 w-5 rounded-sm" />
          </div>
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-8 w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
          </div>
          <Skeleton className="h-20 w-full" />
        </div>
      )}
    </article>
  )
})

LazyPropertyCard.displayName = 'LazyPropertyCard'

export default LazyPropertyCard
