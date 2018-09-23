# shared-config

Share configuration of eslint, babel, prettier and vscode config amongst projects

# Usage

Add this in your `package.json`

```json
{
  "devDependencies": {
    "@dmail/shared-config": "6.0.0"
  }
}
```

## Eslint config sharing

Create `eslintrc.js` at the root of your project

```js
module.exports = require("@dmail/shared-config/dist/eslint.js").config
```

## Prettier config sharing

Create `prettier.config.js` at the root of your project

```js
module.exports = require("@dmail/shared-config/dist/prettier.js").config
```

## Babel config sharing

Create `.babelrc` at the root of your project

```rc
{
	"presets": ["@dmail/shared-config/dist/babel-preset.js"]
}
```

Note: I plan to use [babel.config.js](https://babeljs.io/docs/en/next/babelconfigjs.html), this is tracked in https://github.com/dmail/shared-config/issues/10
