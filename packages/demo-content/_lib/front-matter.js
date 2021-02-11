const YAML = require('yaml')

module.exports = (opts) => (`---
${YAML.stringify(opts)}---`)