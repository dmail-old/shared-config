const { rollup } = require("rollup")
const babel = require("rollup-plugin-babel")

exports.build = ({ inputFile, outputFile }) => {
  rollup({
    input: inputFile,
    plugins: [
      babel({
        babelrc: false,
        exclude: "node_modules/**",
        plugins: ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-transform-spread"],
      }),
    ],
  })
    .then((bundle) => {
      return bundle.write({
        format: "cjs",
        file: outputFile,
      })
    })
    .then(() => {
      console.log("build done")
    }, console.error)
}
