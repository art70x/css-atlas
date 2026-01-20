import { categories, type Category } from "@/data/cssProperties";

interface CategoryFilterProps {
  selected: Category | "all";
  onSelect: (category: Category | "all") => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div 
      className="flex flex-wrap gap-2 justify-center" 
      role="tablist" 
      aria-label="Filter by category"
    >
      <button
        onClick={() => onSelect("all")}
        role="tab"
        aria-selected={selected === "all"}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform active:scale-95 ${
          selected === "all"
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
            : "bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:scale-102"
        }`}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          role="tab"
          aria-selected={selected === category}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform active:scale-95 ${
            selected === category
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
              : "bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:scale-102"
          }`}
          style={{ animationDelay: `${index * 30}ms` }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
