'use client'

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Code(props: any) {
  const { code, language } = props
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={true}
      style={materialDark}
    >
      {code}
    </SyntaxHighlighter>
  )
}
