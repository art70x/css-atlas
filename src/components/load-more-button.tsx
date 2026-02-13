interface LoadMoreButtonProperties {
  onClick: () => void
  remainingCount: number
  isLoading: boolean
}

const LoadMoreButton = ({ onClick, remainingCount, isLoading }: LoadMoreButtonProperties) => {
  return (
    <div className="flex justify-center py-8">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="group flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 font-medium text-primary transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
      >
        {isLoading ? (
          <>
            <ILucideLoader2 className="size-4 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            <span>Load {Math.min(remainingCount, 12)} more</span>
            <ILucideChevronDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </>
        )}
      </button>
      <span className="sr-only">{remainingCount} properties remaining</span>
    </div>
  )
}

export default LoadMoreButton
