var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

//module.exports = {
    //devtool: 'source-map'
    //devtool: 'eval',
    //devtool: 'inline-source-map',
    //devtool: 'src/index.js --index index.html --watch,'
    
//};

var config = {
    "entry": SRC_DIR + "/app/index.js",
    "output": {
        "path": DIST_DIR + "/app",
        "filename": "bundle.js",
        "publicPath": "/app/"
    },
    "module": {
        devtool: 'eval',
        loaders: [
                {
                    test: /\.js?/,
                    include: SRC_DIR,
                    loader: "babel-loader",
                    query: {
                        "preset": ["react", "es2015", "stage-2"]
                    }
                }
        ]
    }
};

module.exports = config;


