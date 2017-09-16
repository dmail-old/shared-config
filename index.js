const deepMerge = require("deepmerge")
const eslintConfig = require("./src/eslint")
const prettierConfig = require("./src/prettier")

const namedConfig = {
	eslint: eslintConfig,
	prettier: prettierConfig
}

const config = (name, ...overrides) =>
	deepMerge.all([namedConfig[name], ...overrides], { clone: true })
exports.config = config
