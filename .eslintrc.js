module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'plugin:prettier/recommended', 'eslint:recommended'],
    rules: {
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 分号
        semi: [0],
        'prettier/prettier': 'off' // 解决prettier报错
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
