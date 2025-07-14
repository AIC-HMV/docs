aichmv_core7_vitest.config.ts

export default {
  test: {
    include: [
      '**/*.test.[jt]s?(x)',
      '**/*.spec.[jt]s?(x)',
      'src/**/tests/unit/**/*.test.[jt]s?(x)',
      'src/**/tests/integration/**/*.test.[jt]s?(x)',
    ],
    exclude: [
      '**/tests/playwright-*.spec.ts',
      '**/tests/legacy/**',
    ],
    watch: false,
  },
}
