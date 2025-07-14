from pathlib import Path

# Define the new filename and file path
new_filename = "aichmv_core7_vitest.config.ts"
file_path = Path("/mnt/data/") / new_filename

# Define the content to be saved
edited_vitest_config = """
export default {
  test: {
    include: [
      '**/*.test.[jt]s?(x)',
      '**/*.spec.[jt]s?(x)',
      'src/**/tests/unit/**/*.test.[jt]s?(x)',
      'src/**/tests/integration/**/*.test.[jt]s?(x)'
    ],
    exclude: ['**/tests/playwright-*.spec.ts', '**/tests/legacy/**'],
    watch: false,
  },
}
"""

# Write content to the new file
file_path.write_text(edited_vitest_config)

# Return the filename for confirmation
file_path.name