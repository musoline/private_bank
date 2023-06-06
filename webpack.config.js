const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: "./index.ts",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
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
        new MiniCssExtractPlugin({
            filename: `test.css`
        }),
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