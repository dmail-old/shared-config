import {
  arrowFunction,
  blockScopedFunction,
  blockScoping,
  classPlugin,
  computedProperty,
  destructuring,
  duplicateKeys,
  ES2015Literals,
  ES2015Parameters,
  exponentiationOperator,
  forOf,
  functionName,
  memberExpressionLiteral,
  objectRestSpreadOperator,
  objectSuper,
  propertyLiteral,
  propertyMutator,
  regenerator,
  shorthandProperty,
  spreadOperator,
  stickyRegex,
  templateLiterals,
  unicodeRegex,
} from "./plugins.js"

const plugins = [
  arrowFunction,
  blockScopedFunction,
  blockScoping,
  classPlugin,
  computedProperty,
  destructuring,
  duplicateKeys,
  forOf,
  functionName,
  ES2015Literals,
  objectSuper,
  ES2015Parameters,
  shorthandProperty,
  spreadOperator,
  stickyRegex,
  templateLiterals,
  unicodeRegex,
  memberExpressionLiteral,
  propertyLiteral,
  propertyMutator,
  exponentiationOperator,
  objectRestSpreadOperator,
  regenerator,
].map((plugin) => {
  return {
    ...plugin,
    enabled: true,
  }
})

export const createSyntaxOptions = () => {
  return {
    plugins,
  }
}
