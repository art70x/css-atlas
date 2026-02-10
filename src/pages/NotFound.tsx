import { useLocation } from 'react-router'
import { useEffect } from 'react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="dark flex min-h-dvh flex-col bg-background">
      <div className="text-foreground lg:mx-10 lg:border-x">
        <div className="flex h-[calc(100vh-4.01rem)] items-center justify-center border-x">
          <div className="flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row">
            <h1 className="text-2xl font-extrabold tracking-tight sm:mr-6 sm:border-r sm:pr-6 sm:text-3xl">
              404
            </h1>
            <h2 className="mt-2 text-muted-foreground sm:mt-0">Page not found</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
