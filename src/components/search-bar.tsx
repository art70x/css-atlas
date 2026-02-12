import { Search, X } from 'lucide-react'

interface SearchBarProperties {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const SearchBar = ({
  value,
  onChange,
  placeholder = 'Search CSS properties...',
}: SearchBarProperties) => {
  return (
    <div className="group relative mx-auto w-full max-w-2xl">
      <div className="absolute inset-0 animate-glow-pulse rounded-xl bg-primary/10 opacity-50 blur-xl transition-opacity group-focus-within:opacity-80" />
      <div className="relative">
        <Search
          className="absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
          aria-hidden="true"
        />
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-border/50 bg-muted/50 px-5 py-4 pr-12 pl-14 text-lg backdrop-blur-sm transition-all duration-200 placeholder:text-muted-foreground focus:border-primary/50 focus:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] focus:ring-2 focus:ring-primary/20 focus:outline-none"
          aria-label="Search CSS properties"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-md p-1.5 transition-all hover:bg-muted/50 active:scale-90"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-muted-foreground transition-colors hover:text-foreground" />
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
