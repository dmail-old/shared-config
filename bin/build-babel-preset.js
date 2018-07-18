const path = require("path")

require("./build.js").build({
  inputFile: path.resolve(__dirname, "../src/babel/babel-preset.js"),
  outputFile: path.resolve(__dirname, "../dist/babel-preset.js"),
})
