import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search CSS properties..." }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-0 rounded-xl bg-primary/10 blur-xl opacity-50 animate-glow-pulse" />
      <div className="relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="search-input pl-14"
          autoFocus
        />
      </div>
    </div>
  );
};

export default SearchBar;
