import { categories, type Category } from "@/data/cssProperties";

interface CategoryFilterProps {
  selected: Category | "all";
  onSelect: (category: Category | "all") => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onSelect("all")}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          selected === "all"
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
            : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selected === category
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
              : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
