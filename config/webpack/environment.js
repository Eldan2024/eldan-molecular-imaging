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

// file-loader for webmanifest
environment.loaders.append("webmanifest", {
  test: /\.webmanifest$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
    },
  },
});

module.exports = environment;
