const StyleDictionary = require('style-dictionary')

StyleDictionary.registerTransform({
  name: 'name/deleteDefault',
  type: 'name',
  matcher: (token) => token.name.includes('DEFAULT'),
  transformer: (token) => {
    return token.name.replace('-DEFAULT', '')
  }
})
