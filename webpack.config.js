require('webpack');
const path = require('path');

module.exports = (env, argv) => {
    const config = argv.mode === 'development' ? devConfig() : prodConfig();
    return {
        entry: {
            front: "./assets/index.ts",
        },

        output: {
            path: path.resolve(__dirname, 'public'),
            filename: "build/js/[name].js",
            publicPath: "/",
            clean: {
                keep: /index\.html|index\.php|View|css/,
            },
        },

        ...config
    }
}

/**
 * Mode dev
 */
function devConfig() {

    return {
        mode: 'development',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(s)css$/i,
                    use: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                /* Règles fichiers images
                {
                    test: /\.(png|jpe?g|gif|webp)$/i,
                    type: 'assets/resource',
                    generator: {filename: 'build/images/[name][ext]'}
                },*/
            ]
        },

        devServer: {
            host: 'localhost',
            watchFiles: ['assets/*'],
            static: {
                directory: path.join(__dirname, 'public'),
                watch: true,
            },
            compress: true,
            port: 9000,
            hot: true,
            open: true,
        },

        optimization: {minimize: false}
    }
}

/**
 * Mode production
 */
function prodConfig() {
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
    const TerserPlugin = require("terser-webpack-plugin");

    return {
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.(s)css$/i,
                    use: [MiniCssExtractPlugin.loader, "scss-loader", "sass-loader"]
                },

                /* Règles fichiers images
                {
                    test: /\.(png|jpe?g|gif|webp)$/i,
                    type: 'asset/resource',
                    generator: {filename: 'build/images/[name][ext]'}
                }, */
                {
                    test: /\.(m)js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread'],
                        exclude: ['/assets/specs']
                    }
                },

            ]
        },

        optimization: {
            minimize: true,
            minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
        },

        plugins: [
            new MiniCssExtractPlugin({ filename: "build/css/[name].css", })
        ]
    }
}