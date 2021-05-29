const HtmlWebPack    = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

module.exports = {

    mode: "development",
    //LIMPIANDO Y CREANDO BUILD
    output:{
        clean: true
    },

    //REGLAS DEL BUILD
    module: {
        rules: [
            {
                test:/\.html$/,
                loader: 'html-loader',
                options:{
                    sources: false,
                    minimize: true,
                },

            },
            {
                test:/\.css$/,
                exclude: /.styles.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]

                },
                {
                    test:/.styles.css$/,
                    use: [ MiniCssExtract.loader, 'css-loader'] ,

                }
        ]
    },
 
    //Cofiguracion del pluginn

      plugins:[
        new HtmlWebPack({
            title: 'WebPack App',
            template: './src/index.html',
            filename: './index.html'//OPCIONAL
        }),
        new MiniCssExtract ({
            filename: '[name].css'
        }),
    ]

}