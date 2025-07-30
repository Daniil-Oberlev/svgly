import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import pluginUnicorn from 'eslint-plugin-unicorn'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    ignores: ['.vscode', 'node_modules', 'dist'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',

      'vue/no-unused-components': 'error',
      'vue/no-unused-vars': 'error',
      'vue/require-default-prop': 'error',
      'vue/no-v-html': 'error',
      'vue/no-unused-refs': 'error',
      'vue/require-explicit-emits': 'error',
      'vue/no-dupe-keys': 'error',
      'vue/no-side-effects-in-computed-properties': 'error',

      'unicorn/prefer-module': 'error',
      'unicorn/no-null': 'error',
      'unicorn/prefer-top-level-await': 'error',
      'unicorn/no-array-callback-reference': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            e: false,
            el: false,
            ref: false,
            props: false,
            args: false,
            env: true
          }
        }
      ],
      'unicorn/filename-case': [
        'error',
        {
          cases: { kebabCase: true, pascalCase: true, camelCase: true }
        }
      ],
      'unicorn/no-useless-undefined': 'error',
      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/no-unreadable-array-destructuring': 'error',

      'unicorn/number-literal-case': 'off',
      'unicorn/template-indent': 'off'
    }
  },
  {
    name: 'app/composables-disable-filename-case',
    files: ['composables/**/*.{ts,mts}'],
    rules: {
      'unicorn/filename-case': 'off'
    }
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/recommended'],

  vueTsConfigs.strict,

  ...pluginOxlint.configs['flat/recommended'],

  pluginUnicorn.configs['recommended'],

  skipFormatting
)
