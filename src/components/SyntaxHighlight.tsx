interface SyntaxHighlightProps {
  code: string;
}

const SyntaxHighlight = ({ code }: SyntaxHighlightProps) => {
  const highlightCode = (code: string) => {
    const lines = code.split('\n');
    
    return lines.map((line, lineIndex) => {
      const tokens: JSX.Element[] = [];
      let remaining = line;
      let tokenIndex = 0;

      // Match comments first
      const commentMatch = remaining.match(/\/\*.*?\*\/|\/\/.*/);
      if (commentMatch) {
        const idx = remaining.indexOf(commentMatch[0]);
        if (idx >= 0) {
          if (idx > 0) {
            tokens.push(<span key={tokenIndex++}>{remaining.slice(0, idx)}</span>);
          }
          tokens.push(
            <span key={tokenIndex++} className="syntax-comment">
              {commentMatch[0]}
            </span>
          );
          remaining = remaining.slice(idx + commentMatch[0].length);
        }
      }

      // Process property: value pairs
      const propertyMatch = remaining.match(/^(\s*)([a-z-]+)(\s*:\s*)(.+?)(;?)$/);
      if (propertyMatch) {
        const [, indent, property, colon, valueAndRest, semicolon] = propertyMatch;
        
        tokens.push(<span key={tokenIndex++}>{indent}</span>);
        tokens.push(
          <span key={tokenIndex++} className="syntax-property">
            {property}
          </span>
        );
        tokens.push(<span key={tokenIndex++} className="syntax-bracket">{colon}</span>);
        
        // Highlight values
        const highlightedValue = highlightValue(valueAndRest);
        tokens.push(<span key={tokenIndex++}>{highlightedValue}</span>);
        
        if (semicolon) {
          tokens.push(<span key={tokenIndex++} className="syntax-bracket">{semicolon}</span>);
        }
      } else {
        // Handle selectors and brackets
        const selectorMatch = remaining.match(/^(\s*)([\.\#\w\-\:\[\]=\"\s\*\>\+\~]+)(\s*\{)$/);
        if (selectorMatch) {
          const [, indent, selector, bracket] = selectorMatch;
          tokens.push(<span key={tokenIndex++}>{indent}</span>);
          tokens.push(
            <span key={tokenIndex++} className="syntax-keyword">
              {selector}
            </span>
          );
          tokens.push(<span key={tokenIndex++} className="syntax-bracket">{bracket}</span>);
        } else if (remaining.trim() === '}') {
          tokens.push(
            <span key={tokenIndex++} className="syntax-bracket">
              {remaining}
            </span>
          );
        } else if (remaining.trim()) {
          tokens.push(<span key={tokenIndex++}>{remaining}</span>);
        }
      }

      return (
        <div key={lineIndex} className="leading-relaxed">
          {tokens.length > 0 ? tokens : <span>&nbsp;</span>}
        </div>
      );
    });
  };

  const highlightValue = (value: string): JSX.Element => {
    const parts: JSX.Element[] = [];
    let remaining = value;
    let index = 0;

    // Pattern for different value types
    const patterns = [
      { regex: /(#[0-9a-fA-F]{3,8})/g, className: "syntax-string" },
      { regex: /(\d+(?:\.\d+)?)(px|em|rem|%|vw|vh|fr|deg|rad|s|ms)/g, className: "syntax-value", unit: true },
      { regex: /(\d+(?:\.\d+)?)/g, className: "syntax-value" },
      { regex: /(rgba?|hsla?|linear-gradient|radial-gradient|repeat|minmax|clamp|calc|url)\(/g, className: "syntax-keyword" },
    ];

    // Split by spaces and process each token
    const tokens = remaining.split(/(\s+)/);
    
    tokens.forEach((token, i) => {
      if (/^\s+$/.test(token)) {
        parts.push(<span key={index++}>{token}</span>);
        return;
      }

      // Check for functions
      const funcMatch = token.match(/^(rgba?|hsla?|linear-gradient|radial-gradient|repeat|minmax|clamp|calc|url)(\(.*)$/);
      if (funcMatch) {
        parts.push(
          <span key={index++} className="syntax-keyword">{funcMatch[1]}</span>
        );
        parts.push(<span key={index++} className="syntax-bracket">(</span>);
        const innerContent = funcMatch[2].slice(1, -1);
        parts.push(<span key={index++} className="syntax-value">{innerContent}</span>);
        if (funcMatch[2].endsWith(')')) {
          parts.push(<span key={index++} className="syntax-bracket">)</span>);
        }
        return;
      }

      // Check for numbers with units
      const unitMatch = token.match(/^(\d+(?:\.\d+)?)(px|em|rem|%|vw|vh|fr|deg|rad|s|ms|turn)$/);
      if (unitMatch) {
        parts.push(
          <span key={index++} className="syntax-value">{unitMatch[1]}</span>
        );
        parts.push(
          <span key={index++} className="syntax-unit">{unitMatch[2]}</span>
        );
        return;
      }

      // Check for hex colors
      const hexMatch = token.match(/^(#[0-9a-fA-F]{3,8})$/);
      if (hexMatch) {
        parts.push(
          <span key={index++} className="syntax-string">{hexMatch[1]}</span>
        );
        return;
      }

      // Check for plain numbers
      const numMatch = token.match(/^(\d+(?:\.\d+)?)$/);
      if (numMatch) {
        parts.push(
          <span key={index++} className="syntax-value">{numMatch[1]}</span>
        );
        return;
      }

      // Keywords
      const keywords = ['auto', 'none', 'inherit', 'initial', 'unset', 'transparent', 'currentColor'];
      if (keywords.includes(token)) {
        parts.push(
          <span key={index++} className="syntax-keyword">{token}</span>
        );
        return;
      }

      // Default: treat as value
      parts.push(
        <span key={index++} className="syntax-value">{token}</span>
      );
    });

    return <>{parts}</>;
  };

  return (
    <div className="code-block font-mono text-sm">
      {highlightCode(code)}
    </div>
  );
};

export default SyntaxHighlight;
