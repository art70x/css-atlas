interface CategoryFilterProperties {
  selected: Category | 'all'
  onSelect: (category: Category | 'all') => void
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProperties) => {
  return (
    <div
      className="flex flex-wrap justify-center gap-2"
      role="tablist"
      aria-label="Filter by category"
    >
      <button
        onClick={() => onSelect('all')}
        role="tab"
        aria-selected={selected === 'all'}
        className={`transform rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 active:scale-95 ${
          selected === 'all'
            ? 'scale-105 bg-primary text-primary-foreground shadow-lg shadow-primary/25'
            : 'bg-secondary/50 text-secondary-foreground hover:scale-102 hover:bg-secondary'
        }`}
      >
        All
      </button>
      {categories.map((category: Category, index: number) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          role="tab"
          aria-selected={selected === category}
          className={`transform rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 active:scale-95 ${
            selected === category
              ? 'scale-105 bg-primary text-primary-foreground shadow-lg shadow-primary/25'
              : 'bg-secondary/50 text-secondary-foreground hover:scale-102 hover:bg-secondary'
          }`}
          style={{ animationDelay: `${index * 30}ms` }}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
