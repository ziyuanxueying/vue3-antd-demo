const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          // 自定义主题
          // '@primary-color': '#1DA57A',
        },
      },
    },
  ],
  eslint: {
    configure: {
      extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
      rules: {
        semi: ['off', 2],
        'eslint-disable-next-line': ['off', 2],
        'import/no-anonymous-default-export': ['off', 2],
      },
    },
  },
  webpack: {
    configure: {},
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:8025/',
    },
  },
};
