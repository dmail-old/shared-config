/*
for whatever freaking reason if we add eslint or prettier as a dependency to this package
npm will throw Maximum call stack size exceeded when trying to install other linked package
i'm freaking tired of npm non robustness on linked package subject so following rule :
DONT ADD ANY DEPENDENCY TO THIS (deepmerge is an exception because does not crash npm for whatever reason)
and this folder don't have local eslint nor local prettier, tant pis
*/

const deepMerge = require("./src/deepMerge")
const babelConfig = require("./src/config/babel")
const eslintConfig = require("./src/config/eslint")
const prettierConfig = require("./src/config/prettier")

const namedConfig = {
	babel: babelConfig,
	eslint: eslintConfig,
	prettier: prettierConfig
}

const config = (name, ...overrides) =>
	deepMerge.all([namedConfig[name], ...overrides], { clone: true })
exports.config = config
