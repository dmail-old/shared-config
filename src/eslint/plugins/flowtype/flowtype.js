import { rules } from "./rules.js"

export const flowtype = {
  name: "flow",
  settings: {
    onlyFilesWithFlowAnnotation: true,
  },
  rules,
  enabled: false,
  // disabled for now, when flow will allow to have untyped module boundaries I will reconsider
  // https://github.com/facebook/flow/issues/4540
}
