import { Code } from '@chakra-ui/react';
import { memo, type ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
}

// Color inspiration: https://github.com/chakra-ui/chakra-ui-docs/blob/9f1b555eb87b82437f2754342b1d7cab5d8bf5e3/src/components/mdx-components/codeblock/codeblock.tsx
// Markup inspiration: https://github.com/chakra-ui/chakra-ui/issues/2394#issuecomment-745092641
const CodeBlock = ({ children }: CodeBlockProps) => {
  return (
    <Code
      display="block"
      whiteSpace="pre"
      width="full"
      p={4}
      bg="#011627"
      overflow="auto"
    >
      {children}
    </Code>
  );
};

export default memo(CodeBlock);
