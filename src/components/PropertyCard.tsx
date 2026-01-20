import type { CSSProperty } from "@/data/cssProperties";
import SyntaxHighlight from "./SyntaxHighlight";
import { Code2, Layers, BookOpen } from "lucide-react";

interface PropertyCardProps {
  property: CSSProperty;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="glass-card-elevated p-6 glow-effect animate-fade-in hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold font-mono text-primary mb-1">
            {property.name}
          </h3>
          <span className="category-badge">{property.category}</span>
        </div>
        <Code2 className="h-5 w-5 text-muted-foreground shrink-0" />
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
        {property.description}
      </p>

      <div className="space-y-4">
        {/* Syntax */}
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            <BookOpen className="h-3.5 w-3.5" />
            Syntax
          </div>
          <code className="block bg-muted/30 rounded-lg px-3 py-2 text-sm font-mono text-foreground/90">
            {property.syntax}
          </code>
        </div>

        {/* Values */}
        {property.values.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              <Layers className="h-3.5 w-3.5" />
              Values
            </div>
            <div className="flex flex-wrap gap-1.5">
              {property.values.map((value) => (
                <span key={value} className="value-chip syntax-value">
                  {value}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Units */}
        {property.units && property.units.length > 0 && (
          <div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Units
            </div>
            <div className="flex flex-wrap gap-1.5">
              {property.units.map((unit) => (
                <span key={unit} className="value-chip syntax-unit">
                  {unit}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Example */}
        <div>
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Example
          </div>
          <SyntaxHighlight code={property.example} />
        </div>

        {/* Browser Support */}
        <div className="pt-3 border-t border-border/50">
          <span className="text-xs text-muted-foreground">
            🌐 {property.browserSupport}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
