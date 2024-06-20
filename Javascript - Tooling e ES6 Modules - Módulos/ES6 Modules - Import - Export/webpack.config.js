/* Webpack:
O Webpack é um empacotador de módulos JavaScript que transforma vários módulos em um único arquivo (conhecido como
bundle). Ele é amplamente utilizado para otimizar projetos web, agrupando ativos como JavaScript, CSS, imagens e
fontes. Além disso, o Webpack cria gráficos de dependência, permitindo um controle mais eficiente entre os
desenvolvedores envolvidos no projeto

*/

const path = require('path'); // CommonJS

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
};