const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 리액트가 실행되는 첫 파일, 기준점  파일 
    entry: "./src/lottenonpick_main.js",
    //번들링된 파일의 결과물을 어떤식으로 저장할 것인지 설정
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js",
    
    },
    //웹팩 개발 서버의 설정
    devServer: {
        port: 3000,
        open: true,
    },
    module : {
        rules : [
            {
                test: /\.{js|jsx}$/,
                exclue: /node_modules/,
                use : {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, "public/lotteonpick_main.html"),
            filename : "lotteonpick_main.html",
        }),
    ],

}; 