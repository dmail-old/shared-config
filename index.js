const deepMerge = require("deepmerge")
const babelConfig = require("./src/babel")
const eslintConfig = require("./src/eslint")
const prettierConfig = require("./src/prettier")

const namedConfig = {
	babel: babelConfig,
	eslint: eslintConfig,
	prettier: prettierConfig
}

const config = (name, ...overrides) =>
	deepMerge.all([namedConfig[name], ...overrides], { clone: true })
exports.config = config
