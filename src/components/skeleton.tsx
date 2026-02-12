function Skeleton({ className, ...properties }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={`animate-pulse rounded-md bg-foreground/20 ${className}`}
      {...properties}
    />
  )
}

export { Skeleton }
