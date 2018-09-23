// syntax
export const arrowFunction = {
  name: "@babel/transform-arrow-functions",
}

export const blockScopedFunction = {
  name: "@babel/transform-block-scoped-functions",
}

export const blockScoping = {
  name: "@babel/transform-block-scoping",
}

export const classPlugin = {
  name: "@babel/transform-classes",
}

export const computedProperty = {
  name: "@babel/transform-computed-properties",
}

export const destructuring = {
  name: "@babel/transform-destructuring",
}

export const duplicateKeys = {
  name: "@babel/transform-duplicate-keys",
}

export const forOf = {
  name: "@babel/transform-for-of",
}

export const functionName = {
  name: "@babel/transform-function-name",
}

export const ES2015Literals = {
  name: "@babel/transform-literals",
}

export const objectSuper = {
  name: "@babel/transform-object-super",
}

export const ES2015Parameters = {
  name: "@babel/transform-parameters",
}

export const shorthandProperty = {
  name: "@babel/transform-shorthand-properties",
}

export const spreadOperator = {
  name: "@babel/transform-spread",
}

export const stickyRegex = {
  name: "@babel/transform-sticky-regex",
}

export const templateLiterals = {
  name: "@babel/transform-template-literals",
}

export const unicodeRegex = {
  name: "@babel/transform-unicode-regex",
}

export const memberExpressionLiteral = {
  name: "@babel/transform-member-expression-literals",
}

export const propertyLiteral = {
  name: "@babel/transform-property-literals",
}

export const propertyMutator = {
  name: "@babel/transform-property-mutators",
}

export const exponentiationOperator = {
  name: "@babel/transform-exponentiation-operator",
}

export const objectRestSpreadOperator = {
  name: "@babel/proposal-object-rest-spread",
}

export const regenerator = {
  name: "@babel/transform-regenerator",
}

// module
export const transformModuleCommonJS = {
  name: "@babel/transform-modules-commonjs",
}

export const transformModuleSystemJS = {
  name: "@babel/transform-modules-systemjs",
}

export const transformAsyncToGenerator = {
  name: "@babel/transform-async-to-generator",
}

// minification
export const minifyConstantFolding = {
  name: "minify-constant-folding",
}

export const minifyDeadCodeElimination = {
  name: "minify-dead-code-elimination",
  settings: {
    keepFnName: true,
    keepFnArgs: true,
    keepClassName: true,
  },
}

export const minifyGuardedExpression = {
  name: "minify-guarded-expressions",
}

export const minifyMangleNames = {
  name: "minify-mangle-names",
  settings: {
    keepFnName: true,
    keepClassName: true,
  },
}

export const minifySimplify = {
  name: "minify-simplify",
}

export const minifyTypeConstructor = {
  name: "minify-type-constructors",
}

export const transformMergeSiblingVariable = {
  name: "transform-merge-sibling-variables",
}

export const transformMinifyBoolean = {
  name: "transform-minify-booleans",
}

export const transformSimplifyComparisonOperator = {
  name: "transform-simplify-comparison-operators",
}

export const transformUndefinedToVoid = {
  name: "transform-undefined-to-void",
}
