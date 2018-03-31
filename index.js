/*
for whatever freaking reason if we add eslint or prettier as a dependency to this package
npm will throw Maximum call stack size exceeded when trying to install other linked package
I'm freaking tired of npm non robustness on linked package subject so following rule :
DONT ADD ANY DEPENDENCY TO THIS (deepmerge is an exception because does not crash npm for whatever reason)
and this folder don't have local eslint nor local prettier, tant pis
*/

const babelExports = require("./src/config/babel/index.js")
const eslintExports = require("./src/config/eslint/index.js")
const prettierExports = require("./src/config/prettier/index.js")

const deepMerge = require("./src/deepMerge/index.js")

const namedConfig = {
	babel: babelExports.config,
	eslint: eslintExports.config,
	prettier: prettierExports.config
}

function config() {
	const name = arguments[0]
	const mergeArgs = [namedConfig[name], {}]
	const overrides = Array.prototype.slice.call(arguments, 1)
	overrides.forEach(override => {
		mergeArgs.push(override)
	})

	return deepMerge.all(mergeArgs, { clone: true })
}

Object.assign(exports, babelExports, eslintExports, prettierExports, { config })
