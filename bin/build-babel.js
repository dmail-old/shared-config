const path = require("path")

require("./build.js").build({
  inputFile: path.resolve(__dirname, "../src/babel/index.js"),
  outputFile: path.resolve(__dirname, "../dist/babel.js"),
})
