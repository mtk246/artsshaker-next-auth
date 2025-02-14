import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps,
  ...appProps
}: AppPropsWithLayout) {
  const theme = createTheme({
    typography: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      button: {
        textTransform: 'none',
      },
    },
  });
  const getLayout = Component.getLayout || ((page) => page);
  const getContent = () => {
    if (appProps.router.pathname.startsWith('/u')) {
      return getLayout(
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
      );
    }
    return getLayout(
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
    );
  };

  return <>{getContent()}</>;
}
