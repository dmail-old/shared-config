// https://eslint.org/docs/rules/

export const acessorPairs = {
  name: "accessor-pairs",
}

export const arrayCallbackReturn = {
  name: "array-callback-return",
}

export const blockScopedVar = {
  name: "block-scoped-var",
}

export const commaDangle = {
  name: "comma-dangle",
  options: [
    {
      arrays: "only-multiline",
      objects: "only-multiline",
      imports: "only-multiline",
      exports: "only-multiline",
      functions: "only-multiline",
    },
  ],
}

export const curly = {
  name: "curly",
}

export const defaultCase = {
  name: "default-case",
}

export const dotNotation = {
  name: "dot-notation",
}

export const dotLocation = {
  name: "dot-location",
  options: ["property"],
}

export const eqeqeq = {
  name: "eqeqeq",
}

export const getterReturn = {
  name: "getter-return",
}

export const guardForIn = {
  name: "guard-for-in",
}

export const consistentReturn = {
  name: "consistent-return",
}

export const noConditionalAssignement = {
  name: "no-cond-assign",
}

export const noConstantCondition = {
  name: "no-constant-condition",
}

export const noControlRegEx = {
  name: "no-control-regex",
}

export const noDebugger = {
  name: "no-debugger",
}

export const noDuplicateArgs = {
  name: "no-dupe-args",
}

export const noDuplicateKeys = {
  name: "no-dupe-keys",
}

export const noDuplicateCase = {
  name: "no-duplicate-case",
}

export const noEmptyCharacterClass = {
  name: "no-empty-character-class",
}

export const noExtraAssignment = {
  name: "no-ex-assign",
}

export const noExtraBooleanCasting = {
  name: "no-extra-boolean-cast",
}

export const noExtraSemiColon = {
  name: "no-extra-semi",
  disabled: true,
}

export const noFunctionAssignment = {
  name: "no-func-assign",
}

export const noInnerDeclaration = {
  name: "no-inner-declarations",
}

export const noInvalidRegExp = {
  name: "no-invalid-regexp",
}

export const noIrregularWhiteSpace = {
  name: "no-irregular-whitespace",
}

export const noNegatedInLHS = {
  name: "no-negated-in-lhs",
  disabled: true,
  // disabled because deprecated in favor of no-unsafe-negation
  // https://eslint.org/docs/rules/no-negated-in-lhs
}

export const noObjectCall = {
  name: "no-obj-calls",
}

export const noRegExSpace = {
  name: "no-regex-spaces",
}

export const noSparseArray = {
  name: "no-sparse-arrays",
}

export const noUnreachable = {
  name: "no-unreachable",
}

export const useIsNaN = {
  name: "use-isnan",
}

export const validTypeOf = {
  name: "valid-typeof",
}

export const noUnexpectedMultipleline = {
  name: "no-unexpected-multiline",
}

export const noAlert = {
  name: "no-alert",
}

export const noCaller = {
  name: "no-caller",
}

export const noCaseDeclaration = {
  name: "no-case-declarations",
}

export const noDivRegex = {
  name: "no-div-regex",
}

export const noElseReturn = {
  name: "no-else-return",
}

export const noEmptyPattern = {
  name: "no-empty-pattern",
}

export const noEqualNull = {
  name: "no-eq-null",
}

export const noEval = {
  name: "no-eval",
  disabled: true,
  // Because every one knows eval is a bad idea
  // so when it's used it's always for a good reason
}

export const noExtendNative = {
  name: "no-extend-native",
}

export const noExtraBind = {
  name: "no-extra-bind",
}

export const noExtraLabel = {
  name: "no-extra-label",
}

export const noFallThrough = {
  name: "no-fallthrough",
}

export const noFloatingDecimal = {
  name: "no-floating-decimal",
}

export const noImplicitCoercion = {
  name: "no-implicit-coercion",
}

export const noImplicitGlobal = {
  name: "no-implicit-globals",
}

export const noImpliedEval = {
  name: "no-implied-eval",
}

export const noIterator = {
  name: "no-iterator",
}

export const noLabel = {
  name: "no-labels",
}

export const noLoneBlock = {
  name: "no-lone-blocks",
}

export const noLoopFunction = {
  name: "no-loop-func",
}

export const noMagicNumber = {
  name: "no-magic-numbers",
}

export const noMultipleSpace = {
  name: "no-multi-spaces",
}

export const noMultipleString = {
  name: "no-multi-str",
}

export const noNativeReassignment = {
  name: "no-native-reassign",
}

export const noNewFunction = {
  name: "no-new-func",
}

export const noNewWrapper = {
  name: "no-new-wrappers",
}

export const noNew = {
  name: "no-new",
}

export const noOctalEscape = {
  name: "no-octal-escape",
}

export const noOctal = {
  name: "no-octal",
}

export const noProto = {
  name: "no-proto",
}

export const noRedeclare = {
  name: "no-redeclare",
}

export const noReturnAssignment = {
  name: "no-return-assign",
  options: ["always"],
}

export const noScriptUrl = {
  name: "no-script-url",
}

export const noSelfAssignment = {
  name: "no-self-assign",
}

export const noSelfCompare = {
  name: "no-self-compare",
}

export const noSequence = {
  name: "no-sequences",
}

export const noThrowLiteral = {
  name: "no-throw-literal",
}

export const noUnmodifiedLoopCondition = {
  name: "no-unmodified-loop-condition",
}

export const noUnusedExpression = {
  name: "no-unused-expressions",
}

export const noUnusedLabel = {
  name: "no-unused-labels",
}

export const noUselessCall = {
  name: "no-useless-call",
}

export const noUselessConcat = {
  name: "no-useless-concat",
}

export const noVoid = {
  name: "no-void",
}

export const noWarningComments = {
  name: "no-warning-comments",
  disabled: true,
  // Because I like warning comments
}

export const noWith = {
  name: "no-with",
}

export const wrapIIFE = {
  name: "wrap-iife",
  options: ["inside"],
}

export const yoda = {
  name: "yoda",
}

export const noDeleteVar = {
  name: "no-delete-var",
}

export const noLabelVar = {
  name: "no-label-var",
}

export const noShadowRestrictedName = {
  name: "no-shadow-restricted-names",
}

export const noUndefined = {
  name: "no-undefined",
}

export const noUndefInit = {
  name: "no-undef-init",
}

export const noUndef = {
  name: "no-undef",
  options: [
    {
      typeof: true,
    },
  ],
}

export const noUnusedVar = {
  name: "no-unused-vars",
}

export const noUseBeforeDefine = {
  name: "no-use-before-define",
  options: ["nofunc"],
}

export const handleCallbackError = {
  name: "handle-callback-err",
  severity: "warn",
}

export const noMixedRequire = {
  name: "no-mixed-requires",
  options: [
    {
      grouping: true,
      allowCall: true,
    },
  ],
}

export const noNewRequire = {
  name: "no-new-require",
}

export const noPathConcat = {
  name: "no-path-concat",
}

export const noRestrictedImport = {
  name: "no-restricted-imports",
  options: ["domain", "freelist", "smalloc", "sys", "colors"],
}

export const noRestrictedModule = {
  name: "no-restricted-modules",
  options: ["domain", "freelist", "smalloc", "sys", "colors"],
}

export const noBracketSpacing = {
  name: "array-bracket-spacing",
  options: ["never"],
}

export const braceStyle = {
  name: "brace-style",
  options: ["stroustrup"],
}

export const camelcase = {
  name: "camelcase",
  options: [
    {
      properties: "always",
    },
  ],
}

export const commaSpacing = {
  name: "comma-spacing",
  options: [
    {
      before: false,
      after: true,
    },
  ],
}

export const commaStyle = {
  name: "comma-style",
  options: ["last"],
}

export const computedPropertySpacing = {
  name: "computed-property-spacing",
  options: ["never"],
}

export const endOfLineLast = {
  name: "eol-last",
}

export const indent = {
  name: "indent",
  options: [2, { SwitchCase: 1 }],
  // At first I wanted to used 'tab' so that people can choose identation width.
  // They could decide how much space a tab char takes (2, 4, 100) in their environment
  // But it comes with several issue:
  // - By default github will render a tab with 8 spaces
  // it can be fixed thank to an .editorconfig at the root of the github project (see http://stackoverflow.com/a/33831598)
  // - A user cannot globally defined how much space a tab should take
  // it cannot be fixed because it should be an OS preference that browser should follow
  // Even if tab are thoerically better, in practice spaces are causing less trouble
}

export const jsxQuote = {
  name: "jsx-quotes",
}

export const keySpacing = {
  name: "key-spacing",
  options: [
    {
      beforeColon: false,
      afterColon: true,
    },
  ],
}

export const keywordSpacing = {
  name: "keyword-spacing",
}

export const lineBreakStyle = {
  name: "linebreak-style",
  options: ["unix"],
}

export const maxNestedCallback = {
  name: "max-nested-callbacks",
  severity: "warn",
  options: [4],
}

export const newCap = {
  name: "new-cap",
  options: [
    {
      newIsCap: true,
      capIsNew: true,
    },
  ],
}

export const newParens = {
  name: "new-parens",
}

export const noArrayConstructor = {
  name: "no-array-constructor",
}

export const noLonelyIf = {
  name: "no-lonely-if",
}

export const noMixedSpaceAndTab = {
  name: "no-mixed-spaces-and-tabs",
}

export const noMultipleEmptyLine = {
  name: "no-multiple-empty-lines",
  options: [
    {
      max: 1,
    },
  ],
}

export const noNestedTernary = {
  name: "no-nested-ternary",
}

export const noNegatedCondition = {
  name: "no-negated-condition",
}

export const noNexObject = {
  name: "no-new-object",
}

export const noRestrictedSyntax = {
  name: "no-restricted-syntax",
  options: ["WithStatement"],
}

export const noWhiteSpaceBeforeProperty = {
  name: "no-whitespace-before-property",
}

export const noSpacedFunction = {
  name: "no-spaced-func",
}

export const noTrailingSpace = {
  name: "no-trailing-spaces",
}

export const noUndeededTernary = {
  name: "no-unneeded-ternary",
}

export const objectCurlySpacing = {
  name: "object-curly-spacing",
  options: ["always"],
}

export const oneVar = {
  name: "one-var",
  options: ["never"],
}

export const oneVarDeclarationPerLine = {
  name: "one-var-declaration-per-line",
}

export const operatorAssignment = {
  name: "operator-assignment",
  options: ["always"],
}

export const operatorLineBreak = {
  name: "operator-linebreak",
  options: [
    "after",
    {
      overrides: { "?": "ignore", ":": "ignore" },
    },
  ],
}

export const paddedBlock = {
  name: "padded-blocks",
  options: ["never"],
}

export const quoteProp = {
  name: "quote-props",
  options: [
    "as-needed",
    {
      keywords: false,
      numbers: true,
      // unnecessary: false so that when you fall into edge cases
      // you can use the quoting style you want
      unnecessary: false,
    },
  ],
}

export const quote = {
  name: "quote",
  options: [
    "double",
    // double because closer to .json, this it increase compatibility between .js and .json
    // also because ' are often used in english and '' would lead to 'I\'m' VS "I'm"
  ],
  disabled: true,
  // disabled because it becomes painfull when switching between "" and `` (template literals)
}

export const semiSpacing = {
  name: "semi-spacing",
  options: [
    {
      before: false,
      after: true,
    },
  ],
}

export const semi = {
  name: "semi",
  options: [
    "never",
    // code is more readable without semicolon and eslint will help
    // you for the only exotic use case where semi colon are required
  ],
}

export const spaceBeforeBlock = {
  name: "space-before-blocks",
  options: ["always"],
}

export const spaceInParenthesis = {
  name: "space-in-parens",
  options: ["never"],
}

export const spaceAroundInfixOperator = {
  name: "space-infix-ops",
}

export const spaceAroundUnaryOperator = {
  name: "space-unary-ops",
}

export const spacedComment = {
  name: "spaced-comment",
  options: [
    "always",
    {
      markers: ["!"],
    },
  ],
  disabled: true,
}

export const arrowParenthesis = {
  name: "arrow-parens",
  options: ["as-needed"],
}

export const arrowSpacing = {
  name: "arrow-spacing",
  options: [
    {
      before: true,
      after: true,
    },
  ],
}

export const constructorSuper = {
  name: "constructor-super",
}

export const generatorStarSpacing = {
  name: "generator-star-spacing",
  options: ["both"],
}

export const noClassAssignment = {
  name: "no-class-assign",
}

export const noConstAssignment = {
  name: "no-const-assign",
}

export const noDuplicateClassMember = {
  name: "no-dupe-class-members",
}

export const noNewSymbol = {
  name: "no-new-symbol",
}

export const noThisBeforeSuper = {
  name: "no-this-before-super",
}

export const noUselessConstructor = {
  name: "no-useless-constructor",
}

export const templateCurlySpacing = {
  name: "template-curly-spacing",
}

export const yieldStarSpacing = {
  name: "yield-star-spacing",
  options: ["both"],
}

export const validJSDoc = {
  name: "valid-jsdoc",
  options: [
    {
      requireReturn: false,
      prefer: {
        returns: "return",
      },
    },
  ],
}

export const spaceBeforeFunctionParenthesis = {
  name: "space-before-function-paren",
  options: ["never"],
}

export const maxLineLength = {
  name: "max-len",
  severity: "warn",
  options: [
    120,
    4,
    {
      ignoreComments: true,
      ignoreUrls: true,
      ignorePattern: "^\\s*var\\s.+=\\s.+\\/.*?\\/;$",
    },
  ],
}

export const preferConst = {
  name: "prefer-const",
  options: [{ destructuring: "all", ignoreReadBeforeAssign: true }],
}

export const preferRestParam = {
  name: "prefer-rest-params",
  severity: "warn",
}

export const preferSpread = {
  name: "prefer-spread",
  severity: "warn",
}

export const preferTemplate = {
  name: "prefer-template",
  severity: "warn",
}

export const objectShortHand = {
  name: "object-shorthand",
  severity: "warn",
  options: ["always"],
}
