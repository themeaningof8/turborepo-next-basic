import Code from './Code'

const blockContents = {
  types: {
    code: ({ value }) => <Code {...value} />,
  },
}

export default blockContents
