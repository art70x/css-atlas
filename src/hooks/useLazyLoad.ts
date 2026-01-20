import { useState, useEffect, useCallback, useMemo } from "react";

interface UseLazyLoadOptions<T> {
  items: T[];
  initialCount?: number;
  incrementCount?: number;
  threshold?: number;
}

export const useLazyLoad = <T>({
  items,
  initialCount = 12,
  incrementCount = 12,
  threshold = 200,
}: UseLazyLoadOptions<T>) => {
  const [displayCount, setDisplayCount] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(false);

  // Reset display count when items change (e.g., filter/search)
  useEffect(() => {
    setDisplayCount(initialCount);
  }, [items.length, initialCount]);

  const displayedItems = useMemo(() => {
    return items.slice(0, displayCount);
  }, [items, displayCount]);

  const hasMore = displayCount < items.length;
  const remainingCount = items.length - displayCount;

  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    // Small delay for smooth transition
    setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + incrementCount, items.length));
      setIsLoading(false);
    }, 150);
  }, [hasMore, incrementCount, items.length, isLoading]);

  // Auto-load on scroll near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMore) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight - scrollTop - clientHeight < threshold) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore, threshold, isLoading, hasMore]);

  return {
    displayedItems,
    hasMore,
    remainingCount,
    loadMore,
    isLoading,
  };
};
