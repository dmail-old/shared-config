// TODO: utiliser rollup pour faire dist/eslint.js, dist/babel.js, dist/prettier.js

import { mergeArrayElements } from "../util.js"
import { babelParserOptions } from "./options-babel-parser.js"
import { defaultOptions } from "./options-default.js"
import { prettierOptions } from "./options-prettier.js"

export const mergeOptions = (...objects) => {
  const options = objects.reduce(
    (accumulator, object) => {
      if (typeof object === undefined || object === null) {
        return accumulator
      }
      return {
        ...accumulator,
        ...object,
        parserOptions: object.parserOptions
          ? { ...accumulator.parserOptions, ...object.parserOptions }
          : accumulator.parserOptions,
        env: object.env ? { ...accumulator.env, ...object.env } : accumulator.env,
        globals: object.globals
          ? { ...accumulator.globals, ...object.globals }
          : accumulator.globals,
        settings: object.settings
          ? { ...accumulator.settings, ...object.settings }
          : accumulator.settings,
        plugins: object.plugins ? [...accumulator.plugins, ...object.plugins] : accumulator.plugins,
        rules: object.rules
          ? mergeArrayElements(accumulator.rules, object.rules)
          : accumulator.rules,
      }
    },
    {
      env: {},
      globals: {},
      settings: {},
      plugins: [],
      rules: [],
    },
  )

  return options
}

const createEslintRule = ({
  name,
  severity = "error",
  disabled = false,
  options = [],
  ...rest
}) => {
  if (severity !== "error" && severity !== "warn") {
    throw new Error(`rule severity must be "error" or "warn", got ${severity} for ${name}`)
  }

  const extraProperties = Object.keys(rest)
  if (extraProperties.length > 0) {
    throw new Error(`unexpected rule properties: ${extraProperties}`)
  }

  return [disabled ? "off" : severity, ...options]
}

export const createConfig = (options) => {
  const ruleMap = {}

  options.rules.forEach((rule) => {
    ruleMap[rule.name] = createEslintRule(rule)
  })

  const plugins = options.plugins.filter((plugin) => plugin.enabled).map((plugin) => {
    options.settings[plugin.name] = plugin.settings
    plugin.rules.forEach((pluginRule) => {
      ruleMap[`${plugin.name}/${pluginRule.name}`] = createEslintRule(pluginRule)
    })
    return plugin.name
  })

  return {
    ...options,
    plugins,
    rules: ruleMap,
  }
}

export const config = createConfig(
  mergeOptions(defaultOptions, babelParserOptions, prettierOptions),
)
