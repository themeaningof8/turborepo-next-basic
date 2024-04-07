module.exports = {
  source: ['./tokens.json'],
  platforms: {
    css: {
      buildPath: './',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'color/hex',
        'size/rem',
        'designToken/size/pxToRem'
      ],
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true
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
