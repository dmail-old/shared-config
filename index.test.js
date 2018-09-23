const {
  createConfig,
  mergeOptions,
  createModuleOptions,
  createSyntaxOptions,
} = require("./dist/babel.js")
const { transform } = require("@babel/core")

const config = createConfig(
  mergeOptions(
    createModuleOptions({
      inputModuleFormat: "es",
      outputModuleFormat: "cjs",
    }),
    createSyntaxOptions(),
  ),
)

const code = `import fs from 'fs'
export const name = fs.readFile`
const result = transform(code, config)
