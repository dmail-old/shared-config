// https://babeljs.io/docs/plugins/
// https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-dynamic-import

import { mergeArrayElements } from "../util.js"
import { createModuleOptions } from "./options-module.js"
import { createSyntaxOptions } from "./options-syntax.js"
import { createMinifyOptions } from "./options-minify.js"

export { createModuleOptions }

export { createSyntaxOptions }

export { createMinifyOptions }

export const mergeOptions = (...objects) => {
  const options = objects.reduce(
    (accumulator, object) => {
      if (typeof object === undefined || object === null) {
        return accumulator
      }
      return {
        ...accumulator,
        ...object,
        presets: object.presets ? [...accumulator.presets, ...object.presets] : accumulator.presets,
        plugins: object.plugins
          ? mergeArrayElements(accumulator.plugins, object.plugins)
          : accumulator.plugins,
      }
    },
    {
      presets: [],
      plugins: [],
    },
  )

  return options
}

export const createConfig = (options) => {
  return {
    ...options,
    plugins: options.plugins.filter((plugin) => plugin.enabled).map((plugin) => {
      // eslint-disable-next-line import/no-dynamic-require
      // const pluginExports = require(`babel-plugin-${name}`) // I dont have to do this

      return [
        plugin.name,
        // pluginExports && pluginExports.__esModule ? pluginExports.default : pluginExports,
        plugin.settings,
      ]
    }),
  }
}

export const config = createConfig(
  mergeOptions(
    createModuleOptions({
      inputModuleFormat: "es",
      outputModuleFormat: "cjs",
    }),
    createSyntaxOptions(),
    {
      ignore: ["node_modules", "dist"],
      only: ["index.js", "index.test.js", "src/*", "bin/*"],
    },
  ),
)
