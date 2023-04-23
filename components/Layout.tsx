import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { memo, type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="highlight.100" />
      <meta name="msapplication-navbutton-color" content="highlight.100" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="highlight.100"
      />

      <meta name="description" content="The Nlang Code Editor" />

      <link rel="icon" type="image/png" href="/favicon.png" />

      <title>Nlang Scripting Language</title>
    </Head>

    <Flex minH="100vh" minW="100vw" direction="column" px={[4, 6, 10]} py={3}>
      {children}
    </Flex>
  </>
);

export default memo(Layout);
