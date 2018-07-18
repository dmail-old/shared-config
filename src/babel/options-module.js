import {
  transformAMDSystemWrapper,
  transformCommonJSSystemWrapper,
  transformES2015ModuleCommonJS,
  transformES2015ModuleSystemJS,
  transformGlobalSystemWrapper,
} from "./plugins.js"

const getModuleTransformPlugin = (inputFormat, outputFormat) => {
  if (outputFormat === "cjs") {
    if (inputFormat === "es") {
      return transformES2015ModuleCommonJS
    }
    throw new Error(
      `unexpected ${inputFormat} input format combined with ${outputFormat} output format`,
    )
  }
  if (outputFormat === "systemjs") {
    // https://github.com/ModuleLoader/es-module-loader/blob/master/docs/system-register-dynamic.md
    if (inputFormat === "es") {
      return transformES2015ModuleSystemJS
    }
    if (inputFormat === "cjs") {
      return transformCommonJSSystemWrapper
    }
    if (inputFormat === "amd") {
      return transformAMDSystemWrapper
    }
    if (inputFormat === "global") {
      return transformGlobalSystemWrapper
    }
    throw new Error(
      `unexpected ${inputFormat} input format combined with ${outputFormat} output format`,
    )
  }
  throw new Error(`unexpected ${outputFormat} output format`)
}

export const createModuleOptions = ({ inputModuleFormat, outputModuleFormat }) => {
  if (outputModuleFormat !== undefined && outputModuleFormat !== inputModuleFormat) {
    const plugin = getModuleTransformPlugin(inputModuleFormat, outputModuleFormat)
    return {
      plugins: [
        {
          ...plugin,
          enabled: true,
        },
      ],
    }
  }
  return {}
}
