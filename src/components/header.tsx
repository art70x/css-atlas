const Header = () => {
  return (
    <header className="mb-12 animate-fade-in text-center">
      <div className="group mb-4 inline-flex cursor-default items-center gap-3">
        <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:border-primary/30 group-hover:bg-primary/15">
          <ILucideCompass
            className="size-8 text-primary transition-transform duration-300 group-hover:rotate-180"
            aria-hidden="true"
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          CSS <span className="text-gradient">Atlas</span>
        </h1>
      </div>
      <p className="mx-auto max-w-xl text-lg/relaxed text-muted-foreground">
        Your comprehensive guide to{' '}
        <strong className="text-foreground/80">180+ CSS properties</strong>. Search, explore, and
        master the syntax.
      </p>
      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground/60">
        <span className="flex items-center gap-1.5 rounded-full bg-muted/30 px-2 py-1">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" aria-hidden="true" />
          <span>Modern CSS3</span>
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-muted/30 px-2 py-1">
          <span
            className="h-2 w-2 animate-pulse rounded-full bg-primary"
            style={{ animationDelay: '0.5s' }}
            aria-hidden="true"
          />
          <span>Container Queries</span>
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-muted/30 px-2 py-1 sm:flex">
          <span
            className="h-2 w-2 animate-pulse rounded-full bg-accent"
            style={{ animationDelay: '1s' }}
            aria-hidden="true"
          />
          <span>Color Functions</span>
        </span>
      </div>
    </header>
  )
}

export default Header
