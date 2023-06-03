const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: "./index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: { extensions: ['.ts', '.js'] },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ],
    mode: 'development'
}