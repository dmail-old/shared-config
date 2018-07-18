const path = require("path")

require("./build.js").build({
  inputFile: path.resolve(__dirname, "../src/prettier/index.js"),
  outputFile: path.resolve(__dirname, "../dist/prettier.js"),
})
