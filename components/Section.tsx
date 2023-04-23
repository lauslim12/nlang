import { chakra, HStack, VStack } from '@chakra-ui/react';
import { memo, type ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <VStack as="section" align="start" spacing={3}>
    <HStack fontSize="20px" fontWeight="bold" data-testid={title}>
      <chakra.span>#</chakra.span>
      <chakra.mark
        backgroundColor="highlight.100"
        boxShadow="0 1rem 3rem rgba(0, 0, 0, .30)"
      >
        {title}
      </chakra.mark>
    </HStack>

    {children}
  </VStack>
);

export default memo(Section);
