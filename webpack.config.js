const HtmlWebPack = require('html-webpack-plugin')

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
                    sources:false,
                }
            }
        ]
    },
 

    //CONFIGURACION PLUGINS
 
      plugins:[
        new HtmlWebPack({
            title: 'WebPack App',
            template: './src/index.html',
            filename: './index.html'//OPCIONAL
        }),
    ]

}