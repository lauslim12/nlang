import {
  ChakraProvider,
  extendTheme,
  type ThemeOverride,
} from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Inconsolata, Inter } from 'next/font/google';

const inconsolata = Inconsolata({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const fallbackFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const theme: ThemeOverride = {
  components: {
    Button: {
      defaultProps: {
        size: 'sm',
      },
    },
    Code: {
      defaultProps: {
        variant: 'solid',
        colorScheme: 'linkedin',
      },
    },
  },
  colors: {
    highlight: {
      100: '#7bed9f',
    },
  },
  fonts: {
    body: `${inter.style.fontFamily}, ${fallbackFonts}`,
    heading: `${inconsolata.style.fontFamily}, ${fallbackFonts}`,
  },
  styles: {
    global: {
      '::selection': {
        backgroundColor: '#8f94fb',
        color: '#000',
      },
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={extendTheme(theme)}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
