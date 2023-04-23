import { Icon, Link, type LinkProps } from '@chakra-ui/react';
import { memo, type ReactNode } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ExternalLinkTextProps extends LinkProps {
  href: string;
  children: ReactNode;
}

const ExternalLinkText = ({ children, ...rest }: ExternalLinkTextProps) => (
  <Link color="pink.500" isExternal {...rest}>
    {children}{' '}
    <Icon
      as={FaExternalLinkAlt}
      ml={0.25}
      fontSize={rest.fontSize === 'x-small' ? 10 : 12}
    />
  </Link>
);

export default memo(ExternalLinkText);
