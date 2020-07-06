const htmlPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
