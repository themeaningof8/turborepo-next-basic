const StyleDictionary = require('style-dictionary')
const _ = require('lodash')

StyleDictionary.registerTransform({
  name: 'name/cti/kebab',
  type: 'name',
  transformer: (token, options) => {
    // 文頭が'---'となるので、ハイフンを1つ削除してreturnする
    return [options.prefix].concat(token.path).join('-').slice(1)
  }
})
