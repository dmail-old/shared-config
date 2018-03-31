const { createBabelOptions } = require("./src/config/babel/babel.js")
const babel = require("babel-core")
const assert = require("assert")

const input = `import { foo } from "./file.js"

export const bar = foo + 10`
const expected = `"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar = undefined;

var _file = require("./file.js");

var bar = exports.bar = _file.foo + 10;`

const babelConfig = createBabelOptions({ moduleInput: "es", moduleOutput: "cjs" })
const { code } = babel.transform(input, babelConfig)

assert.equal(code, expected)
