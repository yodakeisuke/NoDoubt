import type { NextPage } from 'next';
import Link from 'next/link';

import { Paper, Typography } from '@mui/material';

import Layout from 'components/frames/Layout/Layout';
import PaperGreen from 'components/frames/PaperGreen/PaperGreen';
import AccountForm from 'pages/auth/AccountForm/AccountForm';

const Auth: NextPage = () => {
  return (
    <Layout title="Auth - ButtonUp!">
      <PaperGreen>
        <Paper sx={{ width: '20rem', mx: 'auto', my: 3, py: 3 }}>
          <AccountForm />
        </Paper>
        <Link href="/" passHref>
          <Typography variant="h6" textAlign="center" sx={{ mb: 3 }}>
            ホームへ戻る
          </Typography>
        </Link>
      </PaperGreen>
    </Layout>
  );
};

export default Auth;
