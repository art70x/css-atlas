import sourceCss from '@wooorm/starry-night/source.css'
import { createStarryNight } from '@wooorm/starry-night'
import { toHtml } from 'hast-util-to-html'
import '@wooorm/starry-night/style/both'

type Properties = {
  code: string
}

let starryNightPromise: ReturnType<typeof createStarryNight> | undefined

function getStarryNight() {
  if (!starryNightPromise) {
    starryNightPromise = createStarryNight([sourceCss])
  }
  return starryNightPromise
}

export default function SyntaxHighlight({ code }: Properties) {
  const [html, setHtml] = useState<string>('')

  useEffect(() => {
    async function highlightCode() {
      const starryNight = await getStarryNight()
      const tree = starryNight.highlight(code, 'source.css')
      setHtml(toHtml(tree))
    }

    highlightCode()
  }, [code])

  return (
    <pre
      className="rounded-md bg-foreground/4 p-2 text-base"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
