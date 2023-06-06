const fs = require('fs');
const glob = require('glob');
const StyleDictionaryModule = require('style-dictionary')
const { makeSdTailwindConfig } = require('sd-tailwindcss-transformer')

function transformTokens() {
  const filePaths = glob.sync('./tokens/*.js');
  filePaths.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/default/g, 'DEFAULT')
      .replace(/(\d)_(?=\d)/g, "$1.");
    fs.writeFileSync(filePath, updatedContent, 'utf8');
  });
}

StyleDictionaryModule.registerTransform({
  type: 'value',
  transitive: true,
  name: 'tailwind/boxShadow',
  matcher: function (token) {
    return token.attributes.category === 'boxShadow'
  },
  transformer: function (args) {
    function formatBoxShadowProperty(value) {
      const { x, y, blur, spread, color, type } = value
      if (value === 'none') return value
      if (type === 'innerShadow') return `inset ${[x, y, blur, spread].map(formatValue).join(" ")} ${color}`
      return `${[x, y, blur, spread].map(formatValue).join(" ")} ${color}`
    }
    const formatValue = (val) => {
      if (val === "0") return val
      return val + "px";
    }
    if (Array.isArray(args.value)) {
      return args.value.map((value) => {
        return formatBoxShadowProperty(value)
      }).join(", ")
    }
    return formatBoxShadowProperty(args.value)
  }
})

StyleDictionaryModule.registerTransform({
  type: 'value',
  transitive: true,
  name: 'tailwind/fontSize',
  matcher: function (token) {
    return token.attributes.category === 'fontSize'
  },
  transformer: function (token) {
    return Object.values(token.value)
  }
})

const types = ['boxShadow', 'colors', 'fontSize', 'fontWeight', 'spacing', 'borderWidth', 'borderRadius', 'lineHeight', 'opacity', 'letterSpacing']

types.map((type) => {
  let sdConfig = makeSdTailwindConfig({
    type,
    source: ['./tokens.json'],
    buildPath: './tokens/',
    transforms: ['attribute/cti', 'name/cti/kebab', 'tailwind/fontSize', 'tailwind/boxShadow']
  })
  const StyleDictionary = StyleDictionaryModule.extend(sdConfig)
  StyleDictionary.buildAllPlatforms()
})

transformTokens()