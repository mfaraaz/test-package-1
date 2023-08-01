process.env.TAMAGUI_TARGET = "native";

module.exports = {
  plugins: [
    [
      "transform-inline-environment-variables",
      {
        include: ["TAMAGUI_TARGET"],
      },
    ],
  ],
};
