from pathlib import Path

# Content of the optimized vitest.config.ts file
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

# Save to file
file_path = Path("/mnt/data/optimized_vitest.config.ts")
file_path.write_text(optimized_vitest_config)

# Return only the filename for confirmation
file_path.name