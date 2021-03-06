const path = require("path");

module.exports = {
  entry: "./client/src/App.jsx",
  output: {
    path: path.resolve(__dirname, "client/public/"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [["@babel/plugin-transform-runtime"]],
            sourceMaps: "inline"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
