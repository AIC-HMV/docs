export default {
  test: {
    include: [
      '**/*.test.[jt]s?(x)',
      '**/*.spec.[jt]s?(x)',
      'src/**/tests/**/*.[jt]s?(x)'
    ],
    exclude: ['**/tests/playwright-*.spec.ts'],

    watch: false,

    alias: {
      '@': new URL('./src', import.meta.url).pathname
    },

    globalSetup: './src/tests/vitest.setup.ts',
    teardownTimeout: 500
  }
}