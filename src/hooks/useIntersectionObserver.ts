import { useEffect, useRef, useState, useCallback } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '100px',
  freezeOnceVisible = true,
}: UseIntersectionObserverOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (freezeOnceVisible) {
          setHasAnimated(true)
        }
      } else if (!freezeOnceVisible) {
        setIsVisible(false)
      }
    },
    [freezeOnceVisible],
  )

  useEffect(() => {
    const element = elementRef.current
    if (!element || (freezeOnceVisible && hasAnimated)) return

    const observer = new IntersectionObserver(callback, {
      threshold,
      rootMargin,
    })

    observer.observe(element)

    return () => observer.disconnect()
  }, [callback, threshold, rootMargin, freezeOnceVisible, hasAnimated])

  return { elementRef, isVisible: isVisible || hasAnimated }
}
