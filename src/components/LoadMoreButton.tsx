import { ChevronDown, Loader2 } from "lucide-react";

interface LoadMoreButtonProps {
  onClick: () => void;
  remainingCount: number;
  isLoading: boolean;
}

const LoadMoreButton = ({ onClick, remainingCount, isLoading }: LoadMoreButtonProps) => {
  return (
    <div className="flex justify-center py-8">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="group flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-xl text-primary font-medium transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            <span>Load {Math.min(remainingCount, 12)} more</span>
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </>
        )}
      </button>
      <span className="sr-only">{remainingCount} properties remaining</span>
    </div>
  );
};

export default LoadMoreButton;
