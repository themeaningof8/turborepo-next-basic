import StyleDictionary from 'style-dictionary'
import type { DesignToken, Options } from 'style-dictionary'

StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: (token: DesignToken) => {
    return token.type === 'dimension'
  },
  transformer: (token: DesignToken, options: Options) => {
    function getBasePxFontSize(options: Options): number {
      return (options && options.basePxFontSize) || 16;
    }
    const baseFont: number = getBasePxFontSize(options);
    const floatVal: number = parseFloat(token.value);
    if (floatVal === 0) {
      return '0';
    }
    return `${floatVal / baseFont}rem`;
  }
})

StyleDictionary.registerTransformGroup({
  name: 'css',
  transforms: ['attribute/cti', 'color/hsl'],
})

StyleDictionary.registerTransformGroup({
  name: 'js',
  transforms: ['attribute/cti', 'size/pxToRem'],
})

const categories = [
  'borderRadius',
  'borderWidth',
  'fontSize',
  'maxWidth',
  'opacity',
  'screens',
  'spacing',
]

type TokenCategoryType = typeof categories[number]

type TokenType = Record<TokenCategoryType, Record<string, string>>

StyleDictionary.registerFormat({
  name: 'myCustomFormat',
  formatter: ({ dictionary }) => {
    const result = {} as TokenType;
    dictionary.allProperties.map((property) => {
      if (typeof property.attributes?.item === 'string') {
        const type = property.attributes.type;
        if (type) {
          result[type] = result[type] || {} as Record<TokenCategoryType, string>;
          result[type][property.attributes.item] = property.value;
        }
      } else {
        result[property.name] = property.value;
      }
    })
    return 'export default ' + JSON.stringify(result, null, 2) + ` satisfies Record<string, string | Record<string, string>>` + ';\n';
  }
})

StyleDictionary.registerParser({
  pattern: /\.json$|\.tokens\.json$|\.tokens$/,
  parse: ({ contents }) => {
    const output = contents
      .replace(/["|']?\$value["|']?:/g, '"value":')
      .replace(/["|']?\$?type["|']?:/g, '"type":')
      .replace(/["|']?\$?description["|']?:/g, '"comment":')
      .replace(/(\d)-(?=\d)/g, '$1.')
    return JSON.parse(output);
  },
})

const getDestination = ({ name, extension }: { name: string, extension: 'json' | 'ts' | 'css' }) => {
  return [name, 'tokens', extension].join('.');
}

const getSdJsConfig = (category: TokenCategoryType) => {
  return {
    source: ['tokens.json'],
    platforms: {
      js: {
        buildPath: 'tokens/js/',
        transformGroup: 'js',
        files: [
          {
            destination: getDestination({ name: category, extension: 'ts' }),
            format: 'myCustomFormat',
            filter: (token: DesignToken) => {
              return token.attributes?.category === category
            }
          }
        ]
      }
    }
  }
}

const getSdCssConfig = () => {
  return {
    source: ['tokens.json'],
    platforms: {
      css: {
        buildPath: 'tokens/css/',
        transformGroup: 'css',
        files: [
          {
            destination: getDestination({ name: 'color', extension: 'css' }),
            format: 'css/variables',
            filter: (token: DesignToken) => {
              return token.category === 'color'
            },
            options: {
              outputReferences: true,
            }
          }
        ]
      }
    }
  }
}

// Build default tokens from config
console.log('👷 Building default tokens');

categories.map((category) => {
  StyleDictionary.extend(getSdJsConfig(category)).buildAllPlatforms();
})

StyleDictionary.extend(getSdCssConfig()).buildAllPlatforms();
