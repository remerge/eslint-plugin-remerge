# eslint-plugin-foo

bar

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-remerge`:

```
$ npm install eslint-plugin-remerge --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-remerge` globally.

## Usage

Add `remerge` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "remerge"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "remerge/no-get-this": 2
    }
}
```

## Supported Rules

* no-get-this
* ember-array-dependency-syntax





