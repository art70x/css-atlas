import { Compass } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center mb-12">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
          <Compass className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          CSS <span className="text-gradient">Atlas</span>
        </h1>
      </div>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto">
        Your comprehensive guide to CSS properties. 
        Search, explore, and master the syntax.
      </p>
    </header>
  );
};

export default Header;
