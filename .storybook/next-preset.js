const path = require("path")

// From: https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70#gistcomment-3687800
module.exports = {
  webpackFinal: async (config) => {
    const removeIndex = config.module.rules.findIndex(
      (rule) => rule.test.toString() === "/\\.css$/",
    )

    if (removeIndex !== -1) {
      config.module.rules.splice(removeIndex, 1)
    }

    config.module.rules.push({
      test: /\.(sc|sa|c)ss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              auto: true,
            },
          },
        },
        {
          loader: "postcss-loader",
          options: {
            implementation: require("postcss"),
            postcssOptions: {
              config: path.resolve(__dirname, "postcss.config.js"),
            },
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "..", "src"),
    })

    return config
  },
}
