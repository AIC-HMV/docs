from pathlib import Path

# Re-create the optimized vitest.config.ts content after code execution reset
optimized_vitest_config = """
export default {
  test: {
    include: [
      '**/*.test.[jt]s?(x)',
      '**/*.spec.[jt]s?(x)',
      'src/**/tests/**/*.[jt]s?(x)'
    ],
    exclude: ['**/tests/playwright-*.spec.ts'],
    watch: false,
  },
}
"""

# Save this to a file for user download if needed
file_path = Path("/mnt/data/optimized_vitest.config.ts")
file_path.write_text(optimized_vitest_config)