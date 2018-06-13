// https://babeljs.io/docs/plugins/
// https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-dynamic-import

const defaultPlugins = {
	"check-es2015-constants": {},
	"syntax-async-functions": {},
	"transform-es2015-arrow-functions": {},
	"transform-es2015-block-scoped-functions": {},
	"transform-es2015-block-scoping": {},
	"transform-es2015-classes": {},
	"transform-es2015-computed-properties": {},
	"transform-es2015-destructuring": {},
	"transform-es2015-duplicate-keys": {},
	"transform-es2015-for-of": {},
	"transform-es2015-function-name": {},
	"transform-es2015-literals": {},
	"transform-es2015-object-super": {},
	"transform-es2015-parameters": {},
	"transform-es2015-shorthand-properties": {},
	"transform-es2015-spread": {},
	"transform-es2015-sticky-regex": {},
	"transform-es2015-template-literals": {},
	"transform-es2015-unicode-regex": {},
	"transform-es3-member-expression-literals": {},
	"transform-es3-property-literals": {},
	"transform-es5-property-mutators": {},
	"transform-exponentiation-operator": {},
	"transform-object-rest-spread": {},
	"transform-regenerator": {}
}

const modulePlugins = {
	"transform-es2015-modules-commonjs": {},
	"transform-es2015-modules-systemjs": {},
	"transform-global-system-wrapper": {},
	"transform-amd-system-wrapper": {},
	"transform-async-to-generator": {},
	"transform-cjs-system-wrapper": {}
}

const minifyPlugins = {
	"minify-constant-folding": {},
	"minify-dead-code-elimination": {
		keepFnName: true,
		keepFnArgs: true,
		keepClassName: true
	},
	"minify-guarded-expressions": {},
	"minify-mangle-names": {
		keepFnName: true,
		keepClassName: true
	},
	"minify-simplify": {},
	"minify-type-constructors": {},
	"transform-merge-sibling-variables": {},
	"transform-minify-booleans": {},
	"transform-simplify-comparison-operators": {},
	"transform-undefined-to-void": {}
}

const getModuleTransformPlugin = (inputFormat, outputFormat) => {
	if (outputFormat === "cjs") {
		if (inputFormat === "es") {
			return "transform-es2015-modules-commonjs"
		}
		throw new Error(`unexpected ${inputFormat} input format combined with ${outputFormat} output format`)
	}
	if (outputFormat === "systemjs") {
		// https://github.com/ModuleLoader/es-module-loader/blob/master/docs/system-register-dynamic.md
		if (inputFormat === "es") {
			return "transform-es2015-modules-systemjs"
		}
		if (inputFormat === "cjs") {
			return "transform-cjs-system-wrapper"
		}
		if (inputFormat === "amd") {
			return "transform-amd-system-wrapper"
		}
		if (inputFormat === "global") {
			return "transform-global-system-wrapper"
		}
		throw new Error(`unexpected ${inputFormat} input format combined with ${outputFormat} output format`)
	}
	throw new Error(`unexpected ${outputFormat} output format`)
}

const createBabelOptions = ({ minify = false, inputModuleFormat, outputModuleFormat } = {}) => {
	const plugins = Object.assign({}, defaultPlugins)

	let compact = false
	let comments = false
	let minified = false

	if (minify) {
		compact = true
		comments = true
		minified = true
		Object.assign(plugins, minifyPlugins)
	}

	let babelPlugins = Object.keys(plugins)
		.filter(name => Boolean(plugins[name]))
		.map(name => {
			return { name, options: plugins[name] }
		})

	if (outputModuleFormat !== undefined && outputModuleFormat !== inputModuleFormat) {
		const modulePluginName = getModuleTransformPlugin(inputModuleFormat, outputModuleFormat)
		babelPlugins.unshift({
			name: modulePluginName,
			options: modulePlugins[modulePluginName]
		})
	}

	babelPlugins = babelPlugins.map(({ name, options }) => {
		// eslint-disable-next-line import/no-dynamic-require
		const pluginExports = require(`babel-plugin-${name}`)

		return [
			pluginExports && pluginExports.__esModule ? pluginExports.default : pluginExports,
			options
		]
	})

	return {
		presets: [],
		plugins: babelPlugins,
		compact,
		comments,
		minified
	}
}

const config = Object.assign(
	createBabelOptions({
		minify: false,
		inputModuleFormat: "es",
		outputModuleFormat: "cjs"
	}),
	{
		ignore: ["node_modules", "dist"],
		only: ["index.js", "index.test.js", "src/*", "bin/*"]
	}
)

exports.minifyPlugins = minifyPlugins
exports.defaultPlugins = defaultPlugins
exports.modulePlugins = modulePlugins
exports.createBabelOptions = createBabelOptions
exports.config = config
