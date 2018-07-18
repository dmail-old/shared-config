export const babelParserOptions = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      spread: true,
      restParams: true,
      defaultParams: true,
      destructuring: true,
      objectLiteralShorthandMethods: true,
    },
  },
}
