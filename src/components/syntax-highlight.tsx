import { createHighlighterCore } from 'shiki/core'
import { createOnigurumaEngine } from 'shiki/engine/oniguruma'

type Properties = {
  code: string
}

const highlighter = await createHighlighterCore({
  themes: [import('@shikijs/themes/ayu-dark')],
  langs: [import('@shikijs/langs/css')],
  engine: createOnigurumaEngine(import('shiki/wasm')),
})

const SyntaxHighlight = ({ code }: Properties) => {
  const html = highlighter.codeToHtml(code, {
    lang: 'css',
    theme: 'ayu-dark',
  })

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default SyntaxHighlight
