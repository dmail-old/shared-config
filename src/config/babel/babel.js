const babelConfig = {
	presets: ["env"],
	plugins: [],
	ignore: ["node_modules", "dist"],
	only: ["index.js", "index.test.js", "src/*"]
}
exports.config = babelConfig
