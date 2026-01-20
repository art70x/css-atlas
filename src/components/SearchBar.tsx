import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search CSS properties..." }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      <div className="absolute inset-0 rounded-xl bg-primary/10 blur-xl opacity-50 animate-glow-pulse transition-opacity group-focus-within:opacity-80" />
      <div className="relative">
        <Search 
          className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" 
          aria-hidden="true"
        />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="search-input pl-14 pr-12 transition-all duration-300 focus:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]"
          autoFocus
          aria-label="Search CSS properties"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-muted/50 transition-all active:scale-90"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
