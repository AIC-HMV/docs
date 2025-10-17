import fs from 'fs'
import path from 'path'

import frontmatter from '@gr2m/gray-matter'
import { getLogLevelNumber } from '#src/observability/logger/lib/log-levels.js'

// Replace imports with hardcoded values
const ROOT = process.env.ROOT || '.'

// Hard-coded language keys to avoid TypeScript import in config file
const languageKeys = ['en', 'es', 'ja', 'pt', 'zh', 'ru', 'fr', 'ko', 'de']

const homepage = path.posix.join(ROOT, 'content/index.md')
const { data } = frontmatter(fs.readFileSync(homepage, 'utf8'))
const productIds = data.children || []

const DEFAULT_VERSION = 'free-pro-team@latest'

export default {
  // Transpile @primer/react so Next's webpack can process its CSS and other assets
  // This ensures CSS in node_modules/@primer/react is handled by the app's loaders.
  transpilePackages: ['@primer/react'],
  // speed up production `next build` by ignoring typechecking during that step of build.
  // type-checking still occurs in the Dockerfile build
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
    silenceDeprecations: [
      'legacy-js-api',
      'import',
      'global-builtin',
      'color-4-api',
      'mixed-decls',
    ],
  },

  // Don't use automatic Next.js logging in dev unless the log level is `debug` or higher
  // See `src/observability/logger/README.md` for log levels
  logging: getLogLevelNumber() < 3 ? false : {},
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
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    config.resolve.fallback = { fs: false, async_hooks: false }
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
