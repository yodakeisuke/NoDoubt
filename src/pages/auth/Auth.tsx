import type { NextPage } from 'next';
import Link from 'next/link';

import { Box, Paper, Typography } from '@mui/material';

import Layout from 'components/frames/Layout/Layout';
import PaperGreen from 'components/frames/PaperGreen/PaperGreen';

const Auth: NextPage = () => {
  return (
    <Layout title="Auth - ButtonUp!">
      <PaperGreen>
        <Paper>a</Paper>
        <Link href="/" passHref>
          <Typography variant="h6" textAlign="center">
            ホームへ戻る
          </Typography>
        </Link>
      </PaperGreen>
    </Layout>
  );
};

export default Auth;
