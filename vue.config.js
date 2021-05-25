const isProd = false
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const cdn = {
  css: [],
  js: [
    'https://unpkg.com/vue@3',
    'https://unpkg.com/vue-router@3.0.3/dist/vue-router.min.js',
    'https://unpkg.com/vuex@3.0.1/dist/vuex.min.js',
    'https://unpkg.com/axios@0.18.0/dist/axios.min.js'
  ]
}
module.exports = {
  // 项目部署的基础路径
  publicPath: './',
  outputDir: 'dist', // 将构建好的文件输出到哪里（或者说将编译的文件） process.env.outputDir, // 生成文件的目录名称
  assetsDir: 'static', // 放置静态资源的地方 (js/css/img/font/...)

  // 配置 webpack-dev-server 行为。
  devServer: {
    port: 6060,
    proxy: {
      '/api': {
        target: 'http://10.101.1.12',
        changeOrigin: true,
        secure: false,
        // ws: true,
        pathRewrite: {
          '^/api': '/' // 请求数据路径别名,这里是注意将static/mock放入public文件夹
        }
      }
    }
  },

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,

  // 使用带有浏览器内编译器的完整构建版本
  // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
  runtimeCompiler: false,

  // babel-loader 默认会跳过 node_modules 依赖。
  // 通过这个选项可以显式转译一个依赖。
  transpileDependencies: [
    /* string or regex */
  ],

  // 是否为生产环境构建生成 source map？
  productionSourceMap: true,

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // #region cdn拆分
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
      }
      // #endregion
      // #region 打包生产.gz包
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
  },
  chainWebpack: config => {
    if (isProd) {
      config.plugin('html').tap(args => {
        args[0].cdn = cdn
        return args
      })
    }
  },

  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-plugin-pwa
  pwa: {},

  // 用于多页配置，默认是 undefined
  pages: {
    index: {
      // 入口文件
      entry: 'src/main.js' /*这个是根入口文件*/,
      // 模板文件
      template: 'public/index.html',
      // 输出文件
      filename: 'index.html',
      // 页面title
      title: 'Index Page'
    },
    // 简写格式
    // 模板文件默认是 `public/subpage.html`
    // 如果不存在，就是 `public/index.html`.
    // 输出文件默认是 `subpage.html`.
    subpage: 'src/main.js' /*注意这个是*/
  },
  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}
