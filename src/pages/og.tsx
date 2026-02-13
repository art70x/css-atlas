export default function Og() {
  useSeo({
    meta: { title: 'OpenGraph Image' },
    robots: 'noindex, nofollow',
  })

  return (
    <div className="grid min-h-dvh place-items-center bg-gray-950">
      <div
        id="og-image"
        className="group inline-flex h-[630px] w-[1200px] cursor-default flex-col items-center justify-center gap-4 border text-center"
        style={{ backgroundImage: 'var(--color-gradient-hero)' }}
      >
        <div className="m-1 scale-110 rotate-12 rounded-2xl border border-primary/30 bg-primary/15 p-3 transition-all duration-300">
          <ILucideCompass
            className="size-28 text-primary transition-transform duration-300"
            aria-hidden="true"
          />
        </div>
        <h1 className="px-2 text-center text-8xl font-semibold tracking-tighter text-balance max-sm:px-4">
          CSS <span className="text-gradient">Atlas</span>
        </h1>
        <p className="mx-auto max-w-xl text-[32px] tracking-[-0.4px] text-muted-foreground">
          Your Complete CSS Reference Guide
        </p>
      </div>
    </div>
  )
}
