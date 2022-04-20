import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import lightTheme from 'global/Theme';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
