import type { DesignToken, Options } from 'style-dictionary'

import StyleDictionary from 'style-dictionary'

StyleDictionary.registerTransform({
  matcher: (token: DesignToken) => {
    return token.type === 'dimension'
  },
  name: 'size/pxToRem',
  transformer: (token: DesignToken, options: Options) => {
    function getBasePxFontSize(options?: Options): number {
      return options?.basePxFontSize || 16
    }
    const baseFont: number = getBasePxFontSize(options)
    const floatVal: number = parseFloat(token.value)
    if (floatVal === 0) {
      return '0'
    }
    return `${floatVal / baseFont}rem`
  },
  type: 'value'
})

StyleDictionary.registerTransformGroup({
  name: 'js',
  transforms: ['attribute/cti', 'size/pxToRem']
})

const categories = [
  'colors',
  'borderRadius',
  'borderWidth',
  'fontSize',
  'maxWidth',
  'opacity',
  'screens',
  'spacing'
]

type TokenCategoryType = (typeof categories)[number]

type TokenType = Record<TokenCategoryType, Record<string, string>>

StyleDictionary.registerFormat({
  formatter: ({ dictionary }) => {
    const result = {} as TokenType
    dictionary.allProperties.map((property) => {
      if (typeof property.attributes?.item === 'string') {
        const type = property.attributes.type
        if (type) {
          result[type] =
            result[type] || ({} as Record<TokenCategoryType, string>)
          result[type][property.attributes.item] = property.value
        }
      } else {
        result[property.name] = property.value
      }
    })
    return `export default ${JSON.stringify(
      result,
      null,
      2
    )} satisfies Record<string, Record<string, string> | string>;\n`
  },
  name: 'myCustomFormat'
})

StyleDictionary.registerParser({
  parse: ({ contents }) => {
    const output = contents
      .replace(/["|']?\$value["|']?:/g, '"value":')
      .replace(/["|']?\$?type["|']?:/g, '"type":')
      .replace(/["|']?\$?description["|']?:/g, '"comment":')
      .replace(/(\d)-(?=\d)/g, '$1.')
    return JSON.parse(output)
  },
  pattern: /\.json$|\.tokens\.json$|\.tokens$/
})

const getDestination = ({
  extension,
  name
}: { extension: 'json' | 'ts'; name: string }) => {
  return [name, 'tokens', extension].join('.')
}

const getSdJsConfig = (category: TokenCategoryType) => {
  return {
    platforms: {
      js: {
        buildPath: 'tokens/',
        files: [
          {
            destination: getDestination({ extension: 'ts', name: category }),
            filter: (token: DesignToken) => {
              return token.attributes?.category === category
            },
            format: 'myCustomFormat'
          }
        ],
        transformGroup: 'js'
      }
    },
    source: ['tokens.json']
  }
}

// Build default tokens from config
console.log('👷 Building default tokens')

categories.map((category) => {
  StyleDictionary.extend(getSdJsConfig(category)).buildAllPlatforms()
})
