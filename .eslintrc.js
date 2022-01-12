module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'curly': ['error', 'multi'],
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 0,
    'camelcase': 'off',
    'no-case-declarations': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 3,
      },
      'multiline': {
        'max': 3,
      },
    }],
    'vue/multi-word-component-names': ['error', {
      'ignores': ['default'],
    }],
  },
}
