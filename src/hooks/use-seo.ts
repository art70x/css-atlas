interface Meta {
  title?: string
  description?: string
  shortDescription?: string
  url?: string
  author?: string
}

interface Image {
  url?: string
  alt?: string
  height?: number
  width?: number
}

interface Icons {
  favicon?: string
  icon?: string
  appleTouchIcon?: string
}

interface UseSeoOptions {
  meta?: Meta
  icons?: Icons
  image?: Image
  robots?: string
}

export function useSeo({ meta, icons, image, robots }: UseSeoOptions) {
  useSeoMeta({
    title: meta?.title,
    description: meta?.description,

    // Open Graph
    ogTitle: meta?.title,
    ogDescription: meta?.shortDescription,
    ogImage: image?.url,
    ogImageAlt: image?.alt,
    ogImageHeight: image?.height,
    ogImageWidth: image?.width,
    ogType: 'website',
    ogLocale: 'en_US',
    ogUrl: meta?.url,

    // Twitter
    twitterCard: 'summary_large_image',
    twitterTitle: meta?.title,
    twitterDescription: meta?.shortDescription,
    twitterImage: image?.url,
    twitterImageAlt: image?.alt,
    twitterImageHeight: image?.height,
    twitterImageWidth: image?.width,
    twitterCreator: meta?.author ? `@${meta.author}` : undefined,

    // Standard
    author: meta?.author,
    creator: meta?.author,
    robots,
    themeColor: '#3ec9ff',
  })

  useHead({
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      ...(meta?.url ? [{ rel: 'canonical', href: meta.url }] : []),

      ...(icons?.favicon
        ? [{ rel: 'shortcut icon', type: 'image/png', href: icons.favicon, sizes: '48x48' }]
        : []),

      ...(icons?.icon ? [{ rel: 'icon', type: 'image/svg+xml', href: icons.icon }] : []),

      ...(icons?.appleTouchIcon
        ? [
            {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: icons.appleTouchIcon,
            },
          ]
        : []),
    ],
  })
}
