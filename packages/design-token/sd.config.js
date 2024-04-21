require('./transforms/pxToRem.js')
require('./transforms/deleteDefault.js')
require('./transforms/kebabCase.js')

module.exports = {
  source: ['./tokens.json'],
  platforms: {
    css: {
      buildPath: './',
      transforms: [
        'name/cti/kebab',
        'name/deleteDefault',
        'color/hex',
        'size/pxToRem'
      ],
      files: [
        {
          destination: 'index.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: '@theme'
          }
        }
      ]
    }
  },
  parsers: [
    {
      pattern: /\.json$/,
      parse: ({ contents }) => {
        const output = contents
          .replace(/["|']?\$value["|']?:/g, '"value":')
          .replace(/["|']?\$type["|']?:/g, '"type":')
          .replace(/["|']?\$description["|']?:/g, '"comment":')
        return JSON.parse(output)
      }
    }
  ]
}
