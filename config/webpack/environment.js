const { environment } = require("@rails/webpacker");

// file-loader for videos
environment.loaders.append("video", {
  test: /\.(mp4|webm)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[name]-[hash].[ext]",
    },
  },
});

module.exports = environment;
