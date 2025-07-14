from pathlib import Path

# New filename
new_filename = "aichmv_core7_vitest.config.ts"
file_path = Path("/mnt/data/" + new_filename)

# Content to be saved
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

# Write content to the new file
file_path.write_text(optimized_vitest_config)

# Return the new filename
file_path.name