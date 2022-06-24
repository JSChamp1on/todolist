const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const NAME              = process.env.npm_package_name;
const MAIN              = `./${process.env.npm_package_bin_entry}`;
const NODE_ENV          = process.env.NODE_ENV;
const API_LINK          = process.env.API_LINK;
const BASE_PATH         = process.env.BASE_PATH || "/";
const DEVELOPMENT       = 'development';

module.exports = {
    entry: {
        [NAME]: MAIN,
    },
    output: {
        filename: `static/${NAME}.[hash].js`,
        path: path.join(__dirname, '../build'),
        publicPath: BASE_PATH,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: (
                                    NODE_ENV === DEVELOPMENT
                                        ? '[path]-[local]'
                                        : '[hash]'
                                ),
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {sourceMap: true},
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name(file) {
                        if (NODE_ENV === DEVELOPMENT) {
                            return '[name].[ext]';
                        }
             
                        return '[hash].[ext]';
                    },
                    publicPath: `${BASE_PATH}assets/images`,
                    outputPath: 'assets/images',
                },
            },
            {
                test: /\.(eot|ttf|woff2?|otf)$/,
                loader: 'file-loader',
                options: {
                    name(file) {
                        if (NODE_ENV === DEVELOPMENT) {
                            return '[name].[ext]';
                        }

                        return '[hash].[ext]';
                    },
                    publicPath: `${BASE_PATH}assets/fonts`,
                    outputPath: 'assets/fonts',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "static/bundle-[name].[contenthash].css",
            chunkFilename: "[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.svg",
        }),
        new webpack.DefinePlugin({
            "env.NODE_ENV": JSON.stringify(NODE_ENV),
            "env.API_LINK": JSON.stringify(API_LINK),
            "env.BASE_PATH": JSON.stringify(BASE_PATH),
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modules: ["node_modules"],
        alias: {
            "@public": path.join(__dirname, "../public"),
            "@app": path.join(__dirname, "../src/app"),
            "@assets": path.join(__dirname, "../src/assets"),
            "@components": path.join(__dirname, "../src/components"),
            "@containers": path.join(__dirname, "../src/containers"),
            "@pages": path.join(__dirname, "../src/pages"),
            "@redux": path.join(__dirname, "../src/redux"),
            "@styles": path.join(__dirname, "../src/styles"),
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        compress: false,
        port: 2999,
        historyApiFallback: true,
    },
};