aichmv_core7_vitest.config.ts

# Edit the content of the optimized configuration file
edited_vitest_config = """
export default {
  test: {
    include: [
      '**/*.test.[jt]s?(x)',
      '**/*.spec.[jt]s?(x)',
      'src/**/tests/unit/**/*.[jt]s?(x)',
      'src/**/tests/integration/**/*.[jt]s?(x)'
    ],
    exclude: ['**/tests/playwright-*.spec.ts', '**/tests/legacy/**'],
    watch: true,
    globals: true,
  },
}
"""

# Overwrite the file with the updated content
file_path.write_text(edited_vitest_config)

file_path.name  # Return the filename again for confirmation
