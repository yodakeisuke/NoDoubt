import type { NextPage } from 'next';
import Link from 'next/link';

import { Divider, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import Layout from 'components/Layout/Layout';
import PaperGreen from 'components/shared/PaperGreen/PaperGreen';
import AccountForm from 'components/auth/AccountForm/AccountForm';
import useValidateSession from 'hooks/useValidateSession';

import { supabase } from 'utils/supabase';

const Auth: NextPage = () => {
  const { pushAuthenticatedUserHome } = useValidateSession();
  supabase.auth.onAuthStateChange((event, _) => {
    if (event === 'SIGNED_IN') {
      pushAuthenticatedUserHome();
    }
  });

  return (
    <Layout title="Auth - ButtonUp!">
      <PaperGreen>
        <Typography variant="h5" textAlign="center" sx={{ m: 2 }}>
          新規登録／ログイン
        </Typography>
        <Divider />
        <Paper sx={{ width: '20rem', mx: 'auto', my: 3, py: 2 }}>
          <AccountForm />
        </Paper>
        <Link href="/" passHref>
          <Button
            type="button"
            variant="text"
            color="info"
            sx={{ mb: 2, width: '15rem', mx: 'auto' }}
          >
            ホームへ戻る
          </Button>
        </Link>
      </PaperGreen>
    </Layout>
  );
};

export default Auth;
