const StyleDictionary = require('style-dictionary')

StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: (token) => {
    return (
      token.type === 'dimension' && token.value !== 0 && token.value !== '1px'
    )
  },
  transformer: (token, options) => {
    function getBasePxFontSize(options) {
      return options?.basePxFontSize || 16
    }
    const baseFont = getBasePxFontSize(options)
    const floatVal = parseFloat(token.value)
    if (floatVal === 0) {
      return '0'
    }
    return `${floatVal / baseFont}rem`
  }
})
