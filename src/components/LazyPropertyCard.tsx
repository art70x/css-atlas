import { memo } from "react";
import type { CSSProperty } from "@/data/cssProperties";
import SyntaxHighlight from "./SyntaxHighlight";
import { Code2, Layers, BookOpen, Copy, Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface LazyPropertyCardProps {
  property: CSSProperty;
  index: number;
}

const LazyPropertyCard = memo(({ property, index }: LazyPropertyCardProps) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: "150px",
  });
  const [copied, setCopied] = useState(false);

  const copyExample = () => {
    navigator.clipboard.writeText(property.example);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      ref={elementRef}
      className="group glass-card-elevated overflow-hidden transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.2)]"
      style={{
        animationDelay: `${Math.min(index * 50, 300)}ms`,
      }}
      itemScope
      itemType="https://schema.org/SoftwareSourceCode"
    >
      {isVisible ? (
        <div className="p-6 animate-fade-in">
          {/* Header */}
          <header className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2
                className="text-xl font-semibold font-mono text-primary mb-1 transition-colors group-hover:text-primary/90"
                itemProp="name"
              >
                {property.name}
              </h2>
              <span className="category-badge transition-transform group-hover:scale-105">
                {property.category}
              </span>
            </div>
            <Code2 className="h-5 w-5 text-muted-foreground shrink-0 transition-transform group-hover:rotate-12" />
          </header>

          {/* Description */}
          <p
            className="text-muted-foreground text-sm leading-relaxed mb-5"
            itemProp="description"
          >
            {property.description}
          </p>

          <div className="space-y-4">
            {/* Syntax */}
            <section>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Syntax</span>
              </div>
              <code
                className="block bg-muted/30 rounded-lg px-3 py-2 text-sm font-mono text-foreground/90 transition-colors group-hover:bg-muted/40"
                itemProp="codeSampleType"
              >
                {property.syntax}
              </code>
            </section>

            {/* Values */}
            {property.values.length > 0 && (
              <section>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Values</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {property.values.map((value) => (
                    <span
                      key={value}
                      className="value-chip syntax-value transition-all hover:scale-105 hover:border-primary/50 cursor-default"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Units */}
            {property.units && property.units.length > 0 && (
              <section>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Units
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {property.units.map((unit) => (
                    <span
                      key={unit}
                      className="value-chip syntax-unit transition-all hover:scale-105 hover:border-accent/50 cursor-default"
                    >
                      {unit}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Example with Copy Button */}
            <section className="relative">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                <span>Example</span>
                <button
                  onClick={copyExample}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 hover:bg-muted transition-all hover:scale-105 active:scale-95"
                  aria-label="Copy example code"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div itemProp="programmingLanguage" content="CSS">
                <SyntaxHighlight code={property.example} />
              </div>
            </section>

            {/* Browser Support */}
            <footer className="pt-3 border-t border-border/50">
              <span className="text-xs text-muted-foreground flex items-center gap-1.5 transition-opacity group-hover:opacity-80">
                <span aria-hidden="true">🌐</span>
                <span>{property.browserSupport}</span>
              </span>
            </footer>
          </div>
        </div>
      ) : (
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-5 w-20" />
            </div>
            <Skeleton className="h-5 w-5 rounded" />
          </div>
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-8 w-full" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
          </div>
          <Skeleton className="h-20 w-full" />
        </div>
      )}
    </article>
  );
});

LazyPropertyCard.displayName = "LazyPropertyCard";

export default LazyPropertyCard;
