const prettierConfig = {
	printWidth: 100,
	semi: false,
	tabWidth: 2,
	useTabs: true,
	trailingComma: "all",
	// arrow function with a single parameter is conceptually great
	// BUT
	// param destructuring requires parenthesis
	// when adding new parameter it becomes a syntax error you have to manually
	// add parenthesis back, which is painful
	arrowParens: "always",
}
exports.config = prettierConfig
