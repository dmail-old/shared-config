// https://babeljs.io/docs/plugins/
// https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-dynamic-import

const modulePlugins = {
	"transform-es2015-modules-commonjs": {},
	"transform-es2015-modules-systemjs": {},
	"transform-global-system-wrapper": {},
	"transform-amd-system-wrapper": {},
	"transform-async-to-generator": {},
	"transform-cjs-system-wrapper": {}
}

const getModuleTransformPlugin = (inputFormat, outputFormat) => {
	if (outputFormat === "cjs") {
		if (inputFormat === "es") {
			return modulePlugins["transform-es2015-modules-commonjs"]
		}
		throw new Error(`unexpected ${inputFormat} input format combined with ${outputFormat} output format`)
	}
	if (outputFormat === "systemjs") {
		// https://github.com/ModuleLoader/es-module-loader/blob/master/docs/system-register-dynamic.md
		if (inputFormat === "es") {
			return modulePlugins["transform-es2015-modules-systemjs"]
		}
		if (inputFormat === "cjs") {
			return modulePlugins["transform-cjs-system-wrapper"]
		}
		if (inputFormat === "amd") {
			return modulePlugins["transform-amd-system-wrapper"]
		}
		if (inputFormat === "global") {
			return modulePlugins["transform-global-system-wrapper"]
		}
		throw new Error(`unexpected ${inputFormat} input format combined with ${outputFormat} output format`)
	}
	throw new Error(`unexpected ${outputFormat} output format`)
}

const createModuleOptions = ({ inputModuleFormat, outputModuleFormat }) => {
	if (outputModuleFormat !== undefined && outputModuleFormat !== inputModuleFormat) {
		return {
			plugins: [
				getModuleTransformPlugin(inputModuleFormat, outputModuleFormat)
			]
		}
	}
	return {}
}

const syntaxPlugins = {
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

const createSyntaxOptions = () => {
	return {
		plugins: Object.keys(syntaxPlugins).filter(name => Boolean(syntaxPlugins[name])).map(name => {
			return { name, options: syntaxPlugins[name] }
		})
	}
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

const createMinifyOptions = () => {
	return {
		plugins: Object.keys(minifyPlugins).filter(name => Boolean(minifyPlugins[name])).map(name => {
			return { name, options: syntaxPlugins[name] }
		}),
		compact: true,
		comments: true,
		minified: true,
	}
}

const mergeBabelOptions = (...objects) => {
	const options = objects.reduce((accumulator, object) => {
		if (typeof object === undefined || object === null) {
			return accumulator
		}
		return {
			...accumulator,
			...object,
			presets: object.presets ? [...accumulator.presets, ...object.presets] : accumulator.presets,
			plugins: object.plugins ? [...accumulator.plugins, ...object.plugins] : accumulator.plugins
		}
	}, {
		presets: [],
		plugins: []
	})

	options.plugins = options.plugins.map(({ name, options }) => {
		// eslint-disable-next-line import/no-dynamic-require
		// const pluginExports = require(`babel-plugin-${name}`) // I dont have to do this

		return [
			name,
			// pluginExports && pluginExports.__esModule ? pluginExports.default : pluginExports,
			options
		]
	})

	return options
}

const config = mergeBabelOptions(
	createModuleOptions({
		inputModuleFormat: "es",
		outputModuleFormat: "cjs"
	}),
	createSyntaxOptions(),
	{
		ignore: ["node_modules", "dist"],
		only: ["index.js", "index.test.js", "src/*", "bin/*"]
	}
)

exports.createModuleOptions = createModuleOptions
exports.createSyntaxOptions = createSyntaxOptions
exports.createMinifyOptions = createMinifyOptions
exports.mergeBabelOptions = mergeBabelOptions
exports.config = config
