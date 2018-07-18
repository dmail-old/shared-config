import {
  minifyConstantFolding,
  minifyDeadCodeElimination,
  minifyGuardedExpression,
  minifyMangleNames,
  minifySimplify,
  minifyTypeConstructor,
  transformMergeSiblingVariable,
  transformMinifyBoolean,
  transformSimplifyComparisonOperator,
  transformUndefinedToVoid,
} from "./plugins.js"

const plugins = [
  minifyConstantFolding,
  minifyDeadCodeElimination,
  minifyGuardedExpression,
  minifyMangleNames,
  minifySimplify,
  minifyTypeConstructor,
  transformMergeSiblingVariable,
  transformMinifyBoolean,
  transformSimplifyComparisonOperator,
  transformUndefinedToVoid,
].map((plugin) => {
  return {
    ...plugin,
    enabled: true,
  }
})

export const createMinifyOptions = () => {
  return {
    plugins,
    compact: true,
    comments: true,
    minified: true,
  }
}
