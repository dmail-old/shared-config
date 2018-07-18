'use strict';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

const mergeArrayElements = (firstArray, secondArray, compare = (a, b) => a.name === b.name) => {
	const mergedElements = [];

	firstArray.forEach(elementInFirstArray => {
		const existingRule = secondArray.find(elementInSecondArray => {
			return compare(elementInFirstArray, elementInSecondArray);
		});
		if (!existingRule) {
			mergedElements.push(_extends({}, elementInFirstArray));
		}
	});

	secondArray.forEach(elementInSecondArray => {
		mergedElements.push(_extends({}, firstArray.find(elementInFirstArray => compare(elementInFirstArray, elementInSecondArray)) || {}, elementInSecondArray));
	});

	return mergedElements;
};

// syntax
const checkES2015Constant = {
  name: "check-es2015-constants"
};

const asyncFunction = {
  name: "syntax-async-functions"
};

const arrowFunction = {
  name: "transform-es2015-arrow-functions"
};

const blockScopedFunction = {
  name: "transform-es2015-block-scoped-functions"
};

const blockScoping = {
  name: "transform-es2015-block-scoping"
};

const classPlugin = {
  name: "classes"
};

const computedProperty = {
  name: "transform-es2015-computed-properties"
};

const destructuring = {
  name: "transform-es2015-destructuring"
};

const duplicateKeys = {
  name: "transform-es2015-duplicate-keys"
};

const forOf = {
  name: "transform-es2015-for-of"
};

const functionName = {
  name: "transform-es2015-function-name"
};

const ES2015Literals = {
  name: "transform-es2015-literals"
};

const objectSuper = {
  name: "transform-es2015-object-super"
};

const ES2015Parameters = {
  name: "transform-es2015-parameters"
};

const shorthandProperty = {
  name: "transform-es2015-shorthand-properties"
};

const spreadOperator = {
  name: "transform-es2015-spread"
};

const stickyRegex = {
  name: "transform-es2015-sticky-regex"
};

const templateLiterals = {
  name: "transform-es2015-template-literals"
};

const unicodeRegex = {
  name: "transform-es2015-unicode-regex"
};

const memberExpressionLiteral = {
  name: "transform-es3-member-expression-literals"
};

const propertyLiteral = {
  name: "transform-es3-property-literals"
};

const propertyMutator = {
  name: "transform-es5-property-mutators"
};

const exponentiationOperator = {
  name: "transform-exponentiation-operator"
};

const objectRestSpreadOperator = {
  name: "transform-object-rest-spread"
};

const regenerator = {
  name: "transform-regenerator"

  // module
};const transformES2015ModuleCommonJS = {
  name: "transform-es2015-modules-commonjs"
};

const transformES2015ModuleSystemJS = {
  name: "transform-es2015-modules-systemjs"
};

const transformGlobalSystemWrapper = {
  name: "transform-global-system-wrapper"
};

const transformAMDSystemWrapper = {
  name: "transform-amd-system-wrapper"
};

const transformCommonJSSystemWrapper = {
  name: "transform-cjs-system-wrapper"

  // minification
};

const getModuleTransformPlugin = (inputFormat, outputFormat) => {
  if (outputFormat === "cjs") {
    if (inputFormat === "es") {
      return transformES2015ModuleCommonJS;
    }
    throw new Error(`unexpected ${inputFormat} input format combined with ${outputFormat} output format`);
  }
  if (outputFormat === "systemjs") {
    // https://github.com/ModuleLoader/es-module-loader/blob/master/docs/system-register-dynamic.md
    if (inputFormat === "es") {
      return transformES2015ModuleSystemJS;
    }
    if (inputFormat === "cjs") {
      return transformCommonJSSystemWrapper;
    }
    if (inputFormat === "amd") {
      return transformAMDSystemWrapper;
    }
    if (inputFormat === "global") {
      return transformGlobalSystemWrapper;
    }
    throw new Error(`unexpected ${inputFormat} input format combined with ${outputFormat} output format`);
  }
  throw new Error(`unexpected ${outputFormat} output format`);
};

const createModuleOptions = ({ inputModuleFormat, outputModuleFormat }) => {
  if (outputModuleFormat !== undefined && outputModuleFormat !== inputModuleFormat) {
    const plugin = getModuleTransformPlugin(inputModuleFormat, outputModuleFormat);
    return {
      plugins: [_extends({}, plugin, {
        enabled: true
      })]
    };
  }
  return {};
};

const plugins = [checkES2015Constant, asyncFunction, arrowFunction, blockScopedFunction, blockScoping, classPlugin, computedProperty, destructuring, duplicateKeys, forOf, functionName, ES2015Literals, objectSuper, ES2015Parameters, shorthandProperty, spreadOperator, stickyRegex, templateLiterals, unicodeRegex, memberExpressionLiteral, propertyLiteral, propertyMutator, exponentiationOperator, objectRestSpreadOperator, regenerator].map(plugin => {
  return _extends({}, plugin, {
    enabled: true
  });
});

const createSyntaxOptions = () => {
  return {
    plugins
  };
};

// https://babeljs.io/docs/plugins/

const mergeOptions = (...objects) => {
  const options = objects.reduce((accumulator, object) => {
    if (typeof object === undefined || object === null) {
      return accumulator;
    }
    return _extends({}, accumulator, object, {
      presets: object.presets ? [].concat(toConsumableArray(accumulator.presets), toConsumableArray(object.presets)) : accumulator.presets,
      plugins: object.plugins ? mergeArrayElements(accumulator.plugins, object.plugins) : accumulator.plugins
    });
  }, {
    presets: [],
    plugins: []
  });

  return options;
};

const createConfig = options => {
  return _extends({}, options, {
    plugins: options.plugins.filter(plugin => plugin.enabled).map(plugin => {
      // eslint-disable-next-line import/no-dynamic-require
      // const pluginExports = require(`babel-plugin-${name}`) // I dont have to do this

      return [plugin.name,
      // pluginExports && pluginExports.__esModule ? pluginExports.default : pluginExports,
      plugin.settings];
    })
  });
};

const config = createConfig(mergeOptions(createModuleOptions({
  inputModuleFormat: "es",
  outputModuleFormat: "cjs"
}), createSyntaxOptions(), {
  ignore: ["node_modules", "dist"],
  only: ["index.js", "index.test.js", "src/*", "bin/*"]
}));

module.exports = config;
