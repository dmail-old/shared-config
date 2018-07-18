const path = require("path")

require("./build.js").build({
  inputFile: path.resolve(__dirname, "../src/eslint/index.js"),
  outputFile: path.resolve(__dirname, "../dist/eslint.js"),
})
