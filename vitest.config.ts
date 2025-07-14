# Modify the content of the optimized configuration file
edited_vitest_config = “””
export default {
  test: {
    include: [
      ‘**/*.test.[jt]s?(x)’,
      ‘**/*.spec.[jt]s?(x)’,
      ‘src/**/tests/unit/**/*.[jt]s?(x)’,
      ‘src/**/tests/integration/**/*.[jt]s?(x)’
    ],
    exclude: [‘**/tests/playwright-*.spec.ts’, ‘**/tests/legacy/**’],
    watch: true,
    globals: true,
  },
}
“””

# Replace the file with the modified content
file_path.write_text(edited_vitest_config)

file_path.name  # Retrieve the filename for verification
