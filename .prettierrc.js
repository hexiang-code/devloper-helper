const prettierConfigStandard = require('prettier-config-standard')
const merge = require('lodash/merge')

const modifiedConfig = merge({}, prettierConfigStandard, {
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  htmlWhitespaceSensitivity: 'ignore',
  arrowParens: 'avoid',
  bracketSameLine: false
})

module.exports = modifiedConfig
