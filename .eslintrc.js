module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'plugin:prettier/recommended', 'eslint:recommended'],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 分号
    semi: [0],
    'prettier/prettier': 'off', // 解决prettier报错
    'vue/no-multiple-template-root': 'off',
    // 0 = off, 1 = warn, 2 = error
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
