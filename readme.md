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

Note: I would like to use [babel.config.js](https://babeljs.io/docs/en/next/babelconfigjs.html) to be able to write

```js
module.exports = require("@dmail/shared-config/dist/babel.js").config
```

But configuring babel using a `.js` file instead of `.rc` is not supported by babel 6.
Unfortunately, at least one of the babel plugin used here is not compatible with babel 7.
I forgot to list which ones, it would be great to do it so that we know what is preventing to move forward.
