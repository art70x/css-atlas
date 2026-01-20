import { Compass } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center mb-12 animate-fade-in">
      <div className="inline-flex items-center gap-3 mb-4 group cursor-default">
        <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary/30 group-hover:scale-110 group-hover:rotate-12">
          <Compass className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          CSS <span className="text-gradient">Atlas</span>
        </h1>
      </div>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
        Your comprehensive guide to <strong className="text-foreground/80">160+ CSS properties</strong>. 
        Search, explore, and master the syntax.
      </p>
      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground/60">
        <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-muted/30">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
          <span>Modern CSS3</span>
        </span>
        <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-muted/30">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} aria-hidden="true" />
          <span>Container Queries</span>
        </span>
        <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-muted/30 hidden sm:flex">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
          <span>Color Functions</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
