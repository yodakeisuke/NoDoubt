import type { AppProps } from 'next/app';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { supabase } from 'utils/supabase';

import { ThemeProvider } from '@mui/material/styles';
import lightTheme from 'global/Theme';
import CssBaseline from '@mui/material/CssBaseline';

import { AuthMutationSnackbar } from 'components/shared/AuthMutationSnackbar/AuthMutationSnackbar';
import type { AuthMutationType } from 'global/types/AuthMutationType';

function MyApp({ Component, pageProps }: AppProps) {
  const { push } = useRouter();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<AuthMutationType>();
  supabase.auth.onAuthStateChange((event, _) => {
    if (event === 'SIGNED_IN') {
      setAlertOpen(true);
      setAlertMessage('login');
    }
    if (event === 'SIGNED_OUT') {
      push('/');
      setAlertOpen(true);
      setAlertMessage('logout');
    }
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <AuthMutationSnackbar
        open={alertOpen}
        setOpen={setAlertOpen}
        mutation={alertMessage}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
