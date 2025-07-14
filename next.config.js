import fs from 'fs'
import path from 'path'
import frontmatter from 'gray-matter'

import { languageKeys } from '#src/languages/lib/languages.js'
import { ROOT } from '#src/frame/lib/constants.js'

const homepage = path.posix.join(ROOT, 'content/index.md')
const { data } = frontmatter(fs.readFileSync(homepage, 'utf8'))
const productIds = data.children || []

const DEFAULT_VERSION = 'free-pro-team@latest'

export default {
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  i18n: {
    locales: languageKeys,
    defaultLocale: 'en',
    localeDetection: true,
  },

  sassOptions: {
    quietDeps: true,
    silenceDeprecations: ['import'],
  },

  async rewrites() {
    return productIds.map((productId) => ({
      source: `/${productId}/:path*`,
      destination: `/${DEFAULT_VERSION}/${productId}/:path*`,
    }))
  },

  webpack: (config) => {
    config.experiments = {
      ...(config.experiments || {}),
      topLevelAwait: true,
    }
    config.resolve.fallback = { fs: false }
    return config
  },

  compress: true, // optimize for delivery
  generateEtags: false, // prevent CDN stale bug

  experimental: {
    largePageDataBytes: 1024 * 1024,
    scrollRestoration: true,
    urlImports: true,
  },

  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },

  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Creator-ID', value: 'Hung-Minh-Vo-AIC-HMV' },
        { key: 'X-Core-Authority', value: 'Core7.Quantum' },
        { key: 'X-Forcus-Directive', value: 'Active' },
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
  ],
}
