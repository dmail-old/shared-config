const parser = "babel-eslint"
exports.parser = parser

const parserOptions = {
	ecmaVersion: 6,
	sourceType: "module",
	ecmaFeatures: {
		jsx: true,
		experimentalObjectRestSpread: true
	}
}

const env = {
	browser: true,
	node: true,
	es6: true
}

const globals = {
	// "jsenv": true
}

const plugins = []
const settings = {}
const rules = {}

const defaultRules = {
	"comma-dangle": [2, "never"],
	"no-cond-assign": 2,
	"no-constant-condition": 2,
	"no-control-regex": 2,
	"no-debugger": 2,
	"no-dupe-args": 2,
	"no-dupe-keys": 2,
	"no-duplicate-case": 2,
	"no-empty-character-class": 2,
	"no-ex-assign": 2,
	"no-extra-boolean-cast": 2,
	"no-extra-semi": ["off"],
	"no-func-assign": 2,
	"no-inner-declarations": 2,
	"no-invalid-regexp": 2,
	"no-irregular-whitespace": 2,
	"no-negated-in-lhs": 2,
	"no-obj-calls": 2,
	"no-regex-spaces": 2,
	"no-sparse-arrays": 2,
	"no-unreachable": 2,
	"use-isnan": 2,
	"valid-typeof": 2,
	"no-unexpected-multiline": 2,
	"accessor-pairs": 2,
	"array-callback-return": 2,
	"block-scoped-var": 2,
	curly: 2,
	"default-case": 2,
	"dot-notation": 2,
	"dot-location": [2, "property"],
	eqeqeq: 2,
	"guard-for-in": 2,
	"no-alert": 2,
	"no-caller": 2,
	"no-case-declarations": 2,
	"no-div-regex": 2,
	"no-else-return": 2,
	"no-empty-pattern": 2,
	"no-eq-null": 2,
	"no-eval": 2,
	"no-extend-native": 2,
	"no-extra-bind": 2,
	"no-extra-label": 2,
	"no-fallthrough": 2,
	"no-floating-decimal": 2,
	"no-implicit-coercion": 2,
	"no-implicit-globals": 2,
	"no-implied-eval": 2,
	"no-iterator": 2,
	"no-labels": 2,
	"no-lone-blocks": 2,
	"no-loop-func": 2,
	"no-multi-spaces": 2,
	"no-multi-str": 2,
	"no-native-reassign": 2,
	"no-new-func": 2,
	"no-new-wrappers": 2,
	"no-new": 2,
	"no-octal-escape": 2,
	"no-octal": 2,
	"no-proto": 2,
	"no-redeclare": 2,
	"no-return-assign": [2, "always"],
	"no-script-url": 2,
	"no-self-assign": 2,
	"no-self-compare": 2,
	"no-sequences": 2,
	"no-throw-literal": 2,
	"no-unmodified-loop-condition": 2,
	"no-unused-expressions": 2,
	"no-unused-labels": 2,
	"no-useless-call": 2,
	"no-useless-concat": 2,
	"no-void": 2,
	"no-warning-comments": 1,
	"no-with": 2,
	"wrap-iife": [2, "inside"],
	yoda: 2,
	"no-delete-var": 2,
	"no-label-var": 2,
	"no-shadow-restricted-names": 2,
	"no-undef-init": 2,
	"no-undef": [
		2,
		{
			typeof: true
		}
	],
	"no-unused-vars": 2,
	"no-use-before-define": [2, "nofunc"],
	"handle-callback-err": 1,
	"no-mixed-requires": [
		2,
		{
			grouping: true,
			allowCall: true
		}
	],
	"no-new-require": 2,
	"no-path-concat": 2,
	"no-restricted-imports": [2, "domain", "freelist", "smalloc", "sys", "colors"],
	"no-restricted-modules": [2, "domain", "freelist", "smalloc", "sys", "colors"],
	"array-bracket-spacing": [2, "never"],
	"brace-style": [
		2,
		"1tbs",
		{
			allowSingleLine: false
		}
	],
	camelcase: [
		2,
		{
			properties: "always"
		}
	],
	"comma-spacing": [
		2,
		{
			before: false,
			after: true
		}
	],
	"comma-style": [2, "last"],
	"computed-property-spacing": [2, "never"],
	"eol-last": 2,
	indent: [
		2,
		4,
		{
			SwitchCase: 1
		}
	],
	"jsx-quotes": 2,
	"key-spacing": [
		2,
		{
			beforeColon: false,
			afterColon: true
		}
	],
	"keyword-spacing": 2,
	"linebreak-style": [2, "unix"],
	"max-nested-callbacks": [1, 4],
	"new-cap": [
		2,
		{
			newIsCap: true,
			capIsNew: true
		}
	],
	"new-parens": 2,
	"no-array-constructor": 2,
	"no-lonely-if": 2,
	"no-mixed-spaces-and-tabs": 2,
	"no-multiple-empty-lines": [
		2,
		{
			max: 1
		}
	],
	"no-nested-ternary": 2,
	"no-negated-condition": 2,
	"no-new-object": 2,
	"no-restricted-syntax": [2, "WithStatement"],
	"no-whitespace-before-property": 2,
	"no-spaced-func": 2,
	"no-trailing-spaces": 2,
	"no-unneeded-ternary": 2,
	"object-curly-spacing": [2, "always"],
	"one-var": [2, "never"],
	"one-var-declaration-per-line": 2,
	"operator-assignment": [2, "always"],
	"operator-linebreak": ["error", "after", { overrides: { "?": "ignore", ":": "ignore" } }],
	"padded-blocks": [2, "never"],
	"quote-props": [2, "as-needed"],
	"semi-spacing": [
		2,
		{
			before: false,
			after: true
		}
	],
	semi: [2, "always"],
	"space-before-blocks": [2, "always"],
	"space-in-parens": [2, "never"],
	"space-infix-ops": 2,
	"space-unary-ops": 2,
	"spaced-comment": [
		"off",
		"always",
		{
			markers: ["!"]
		}
	],
	"arrow-parens": [2, "as-needed"],
	"arrow-spacing": [
		2,
		{
			before: true,
			after: true
		}
	],
	"constructor-super": 2,
	"generator-star-spacing": [2, "both"],
	"no-class-assign": 2,
	"no-const-assign": 2,
	"no-dupe-class-members": 2,
	"no-new-symbol": 2,
	"no-this-before-super": 2,
	"no-useless-constructor": 2,
	"template-curly-spacing": 2,
	"yield-star-spacing": [2, "both"],
	"valid-jsdoc": [
		2,
		{
			requireReturn: false,
			prefer: {
				returns: "return"
			}
		}
	],
	"space-before-function-paren": [2, "never"],
	"max-len": [
		"warn",
		120,
		4,
		{
			ignoreComments: true,
			ignoreUrls: true,
			ignorePattern: "^\\s*var\\s.+=\\s.+\\/.*?\\/;$"
		}
	],
	"prefer-rest-params": ["warn"],
	"prefer-spread": ["warn"],
	"object-shorthand": ["warn", "always"]
}
Object.assign(rules, defaultRules)

const ruleOverrides = {
	indent: [
		"error",
		"tab",
		// I don't want to force people identation width to be 2 or 4
		// they decide how much space a tab char takes (2, 4, 100) in their environment
		// thanks to .editorconfig github respect a width of 2 for tabs so that
		// remote public version remains consistent
		// (see http://stackoverflow.com/a/33831598)
		{
			SwitchCase: 1
		}
	],
	quotes: [
		"off", // because painful when you swtich between ""``
		"double" // because JSON requires it so facilitates it
	],
	"prefer-template": ["warn"],
	/*
	because it seems like a good idea at first (to force specific quote style) but then
	you fall into edge case where you want to keep quote or not for good reasons
	and you dont want a too restrictive rule to get in your way
	*/
	"quote-props": [
		"error",
		"as-needed",
		{
			keywords: false,
			numbers: true,
			unnecessary: false
		}
	],
	"no-warning-comments": ["off"],
	/*
	Variable hoisting is bad, I agree
	Function hoisting is mega cool because it lets your structure you code so that surface methods
	are at the top and implementation detail at the bottom.

	Sometimes your variable contains a function, in that case this variable is used
	as a function and becomes a sort of function hoisting but eslint can't
	This can happen when you bind, curry, memoize your functions.
	It happen very often and I don't want to write // eslint-disable-line no-use-before-define
	All the time.
	However I'll not use variable hoisting anywhere, I hate that anyway.

	Considering all of this, I'm disabling "no-use-before-define".
	*/
	// "no-use-before-define": [
	// 	"off"
	// ],
	"no-eval": ["off"],
	semi: ["error", "never"],
	"brace-style": ["error", "stroustrup"],
	"arrow-parens": [
		"error",
		"as-needed"
		// {
		//     "requireForBlockBody": true
		// }
	],
	"comma-dangle": [
		"error", // because prettier
		{
			arrays: "only-multiline",
			objects: "only-multiline",
			imports: "only-multiline",
			exports: "only-multiline",
			functions: "only-multiline"
		}
	],
	"prefer-const": ["error", { destructuring: "all", ignoreReadBeforeAssign: true }]
}
Object.assign(rules, ruleOverrides)

const importPlugin = {
	name: "import",
	enabled: true,
	settings: {
		extensions: [".js", ".jsx"]
	},
	rules: {
		default: ["error"],
		"no-unresolved": [
			"error",
			{
				commonjs: true,
				amd: false,
				caseSensitive: false
			}
		],
		named: ["error"],
		namespace: [
			"error",
			{
				allowComputed: true
			}
		],
		"no-absolute-path": ["error"],
		"no-dynamic-require": ["error"],
		export: ["error"],
		"no-named-as-default": ["warn"],
		first: ["warn"],
		"no-duplicates": ["warn"],
		"newline-after-import": ["warn"],
		"max-dependencies": [
			"warn",
			{
				max: 10
			}
		]
		// "no-anonymous-default-export": [
		//     "error",
		//     {
		//         "allowArray": true,
		//         "allowArrowFunction": false,
		//         "allowAnonymousClass": false,
		//         "allowAnonymousFunction": false,
		//         "allowLiteral": true,
		//         "allowObject": true
		//     }
	}
}

const flowtypePlugin = {
	name: "flow",
	// disabled for now, when flow will allow to have untyped module boundaries I will reconsider
	// https://github.com/facebook/flow/issues/4540
	enabled: false,
	settings: {
		onlyFilesWithFlowAnnotation: true
	},
	rules: {
		"boolean-style": [2, "boolean"],
		"define-flow-type": 1,
		"delimiter-dangle": [2, "never"],
		"generic-spacing": [2, "never"],
		"no-primitive-constructor-types": 2,
		"no-types-missing-file-annotation": ["off"],
		"no-weak-types": ["off"],
		"object-type-delimiter": [2, "comma"],
		"require-parameter-type": ["off"],
		"require-return-type": [
			"off",
			"always",
			{
				annotateUndefined: "never"
			}
		],
		"require-valid-file-annotation": ["off"],
		semi: ["off", "always"],
		"space-after-type-colon": [2, "always"],
		"space-before-generic-bracket": [2, "never"],
		"space-before-type-colon": [2, "never"],
		"type-id-match": [2, "^([A-Z][a-z0-9]+)+Type$"],
		"union-intersection-spacing": [2, "always"],
		"use-flow-type": 1,
		"valid-syntax": 1
	}
}

const availablePlugins = [importPlugin, flowtypePlugin]
const enabledPlugins = availablePlugins.filter(plugin => plugin.enabled)
const prefixKeys = (object, prefix) => {
	const prefixedObject = {}
	Object.keys(object).forEach(key => {
		prefixedObject[prefix + key] = object[key]
	})
	return prefixedObject
}

enabledPlugins.forEach(({ name, settings: pluginSettings, rules: pluginRules }) => {
	plugins.push(name)
	settings[name] = pluginSettings
	Object.assign(rules, prefixKeys(pluginRules, `${name}/`))
})

// disable some rules because of prettier
// see https://github.com/prettier/eslint-config-prettier/blob/master/index.js
const rulesHandledByPrettier = [
	"array-bracket-newline",
	"array-bracket-spacing",
	"array-element-newline",
	"arrow-parens",
	"arrow-spacing",
	"block-spacing",
	"brace-style",
	"comma-dangle",
	"comma-spacing",
	"comma-style",
	"computed-property-spacing",
	"curly",
	"dot-location",
	"eol-last",
	"func-call-spacing",
	"function-paren-newline",
	"generator-star",
	"generator-star-spacing",
	"implicit-arrow-linebreak",
	"indent",
	"indent-legacy",
	"jsx-quotes",
	"key-spacing",
	"keyword-spacing",
	"lines-around-comment",
	"max-len",
	"multiline-ternary",
	"newline-per-chained-call",
	"new-parens",
	"no-arrow-condition",
	"no-comma-dangle",
	"no-confusing-arrow",
	"no-extra-parens",
	"no-extra-semi",
	"no-floating-decimal",
	"no-mixed-operators",
	"no-mixed-spaces-and-tabs",
	"no-multi-spaces",
	"no-multiple-empty-lines",
	"no-reserved-keys",
	"no-space-before-semi",
	"no-spaced-func",
	"no-tabs",
	"no-trailing-spaces",
	"no-unexpected-multiline",
	"no-whitespace-before-property",
	"no-wrap-func",
	"nonblock-statement-body-position",
	"object-curly-newline",
	"object-curly-spacing",
	"object-property-newline",
	"one-var-declaration-per-line",
	"operator-linebreak",
	"padded-blocks",
	"quotes",
	"quote-props",
	"rest-spread-spacing",
	"semi",
	"semi-spacing",
	"semi-style",
	"space-after-function-name",
	"space-after-keywords",
	"space-before-blocks",
	"space-before-function-paren",
	"space-before-function-parentheses",
	"space-before-keywords",
	"space-in-brackets",
	"space-in-parens",
	"space-infix-ops",
	"space-return-throw-case",
	"space-unary-ops",
	"space-unary-word-ops",
	"switch-colon-spacing",
	"template-curly-spacing",
	"template-tag-spacing",
	"unicode-bom",
	"wrap-iife",
	"wrap-regex",
	"yield-star-spacing"
]
rulesHandledByPrettier.forEach(name => {
	if (name in rules) {
		rules[name][0] = "off"
	}
})

exports.rules = rules

const eslintConfig = {
	parser,
	parserOptions,
	env,
	globals,
	plugins,
	settings,
	rules
}
exports.config = eslintConfig
