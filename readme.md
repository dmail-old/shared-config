# shared-config

Share eslint, babel, prettier and vscode config amongst my projects

# Usage

Add this in your `package.json`

```json
{
  "devDependencies": {
    "@dmail/shared-config": "5.2.0"
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

Note: I would like to use [babel.config.js](https://babeljs.io/docs/en/next/babelconfigjs.html) but it requires babel 7+.
Unfortunately some babel-plugin used here are still compatible only with babel 6.
I forgot to list which ones, it would be great to do it so that we know what is preventing us to move forward.
