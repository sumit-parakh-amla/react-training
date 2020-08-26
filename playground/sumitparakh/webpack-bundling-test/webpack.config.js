/**
 * webpack internally uses node to run webpack build
 */
module.exports = {
    entry: './main.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/, //Regular expression 
                exclude: /(node_modules|bower_components)/,//excluded node_modules 
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]  //Preset used for env setup
                    }
                }
            }
        ]
    }
}