interface UseLazyLoadOptions<T> {
  items: T[]
  initialCount?: number
  incrementCount?: number
  threshold?: number
  delayMs?: number
}

export const useLazyLoad = <T>({
  items,
  initialCount = 12,
  incrementCount = 12,
  threshold = 200,
  delayMs = 150,
}: UseLazyLoadOptions<T>) => {
  const [displayCount, setDisplayCount] = useState(initialCount)
  const [isLoading, setIsLoading] = useState(false)

  const displayedItems = useMemo(() => items.slice(0, displayCount), [items, displayCount])

  const hasMore = displayCount < items.length
  const remainingCount = items.length - displayCount

  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return
    setIsLoading(true)
  }, [isLoading, hasMore])

  useEffect(() => {
    if (!isLoading) return

    const id = setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + incrementCount, items.length))
      setIsLoading(false)
    }, delayMs)

    return () => clearTimeout(id)
  }, [isLoading, incrementCount, items.length, delayMs])

  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMore) return

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement

      if (scrollHeight - scrollTop - clientHeight < threshold) {
        loadMore()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loadMore, threshold, isLoading, hasMore])

  return {
    displayedItems,
    hasMore,
    remainingCount,
    loadMore,
    isLoading,
  }
}
