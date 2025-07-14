from pathlib import Path

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

# Save output
file_path = Path("/mnt/data/optimized_vitest.config.ts")
file_path.write_text(optimized_vitest_config)
file_path.name  # Return only the filename for next step response