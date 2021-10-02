const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    resolve: { 
      extensions: ['.vue', '.js'], // 경로에서 해당 확장자는 생략이 가능.
      alias: {
        '~': path.resolve(__dirname, 'src') // ~라는 별칭으로 루트의 src 경로에서 찾기시작.
      }
    },
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.s?css$/,
          use: ['vue-style-loader', 'css-loader', 'sass-loader'], 
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlPlugin({
        template: './src/index.html', //웹팩이 해석해야하는 html 파일이 어디있는지 명시함
      })
    ]
  }