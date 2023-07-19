/* eslint-disable no-console */
const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: (token) => {
    return token.type === 'dimension'
  },
  transformer: (token, options) => {
    function getBasePxFontSize(options) {
      return (options && options.basePxFontSize) || 16;
    }
    const baseFont = getBasePxFontSize(options);
    const floatVal = parseFloat(token.value);
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

StyleDictionary.registerFormat({
  name: 'myCustomFormat',
  formatter: ({ dictionary }) => {
    const result = {}
    dictionary.allProperties.map((prop) => {
      result[prop.name] = prop.value
    })
    return 'module.exports = ' + JSON.stringify(result, null, 2) + ';\n';
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

const getDestination = ({ name, extension = 'json' }) => {
  return [name, 'tokens', extension].join('.');
}

const getSdJsConfig = (type) => {
  return {
    source: ['tokens.json'],
    platforms: {
      js: {
        buildPath: 'dist/js/',
        transformGroup: 'js',
        files: [
          {
            destination: getDestination({ name: type, extension: 'js' }),
            format: 'myCustomFormat',
            filter: (token) => {
              return token.attributes.category === type
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
        buildPath: 'dist/css/',
        transformGroup: 'css',
        files: [
          {
            destination: getDestination({ name: 'color', extension: 'css' }),
            format: 'css/variables',
            filter: (token) => {
              return token.type === 'color'
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

const types = [
  'borderRadius',
  'borderWidth',
  'fontSize',
  'maxWidth',
  'opacity',
  'screens',
  'spacing',
]

types.map((type) => {
  StyleDictionary.extend(getSdJsConfig(type)).buildAllPlatforms();
})

StyleDictionary.extend(getSdCssConfig()).buildAllPlatforms();
