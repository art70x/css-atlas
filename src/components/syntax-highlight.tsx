import { useEffect } from 'react'
import Prism from 'prismjs'
import '@/assets/syntax.css'
import 'prismjs/components/prism-css'

interface SyntaxHighlightProps {
  code: string
}

const SyntaxHighlight = ({ code }: SyntaxHighlightProps) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <pre className="language-css">
      <code className="language-css">{code}</code>
    </pre>
  )
}

export default SyntaxHighlight
