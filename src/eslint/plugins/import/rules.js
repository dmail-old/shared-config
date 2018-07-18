export const defaultRule = {
  name: "default",
}

export const noUnresolved = {
  name: "no-unresolved",
  options: [
    {
      commonjs: true,
      amd: false,
      caseSensitive: false,
    },
  ],
}

export const named = {
  name: "named",
}

export const namespace = {
  name: "namespace",
  options: [
    {
      allowComputed: true,
    },
  ],
}

export const noAbsolutePath = {
  name: "no-absolute-path",
}

export const noDynamicRequire = {
  name: "no-dynamic-require",
}

export const exportRule = {
  name: "export",
}

export const noNamedAsDefault = {
  name: "no-named-as-default",
  severity: "warn",
}

export const first = {
  name: "first",
  severity: "warn",
}

export const noDuplicate = {
  name: "no-duplicates",
  severity: "warn",
}

export const newLineAfterImport = {
  name: "newline-after-import",
  severity: "warn",
}

export const maxDependency = {
  name: "max-dependencies",
  severity: "warn",
  options: [
    {
      max: 10,
    },
  ],
}

export const noAnonymousDefaultExport = {
  name: "no-anonymous-default-export",
  options: [
    {
      allowArray: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: true,
      allowObject: true,
    },
  ],
  disabled: true,
}

export const rules = [
  defaultRule,
  noUnresolved,
  named,
  namespace,
  noAbsolutePath,
  noDynamicRequire,
  exportRule,
  noNamedAsDefault,
  first,
  noDuplicate,
  newLineAfterImport,
  maxDependency,
  noAnonymousDefaultExport,
]
