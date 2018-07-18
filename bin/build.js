const { rollup } = require("rollup")
const babel = require("rollup-plugin-babel")

exports.build = ({ inputFile, outputFile }) => {
  rollup({
    input: inputFile,
    plugins: [
      babel({
        babelrc: false,
        exclude: "node_modules/**",
        plugins: [
          "babel-plugin-transform-object-rest-spread",
          "babel-plugin-transform-es2015-spread",
          "babel-plugin-external-helpers",
        ],
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
