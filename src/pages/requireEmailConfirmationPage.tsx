import type { NextPage } from 'next';
import Link from 'next/link';

import { Typography, Paper } from '@mui/material';
import Button from '@mui/material/Button';

import Layout from 'components/Layout/Layout';
import PaperGreen from 'components/shared/PaperGreen/PaperGreen';

const requireEmailConfirmationPage: NextPage = () => {
  return (
    <Layout title="ButtonUp!">
      <PaperGreen>
        <Paper sx={{ p: 3, m: 3 }}>
          <Typography variant="h5" textAlign="center" sx={{ m: 2 }}>
            登録ありがとうございます！
          </Typography>
          <Typography variant="h5" textAlign="center" sx={{ m: 2 }}>
            ご指定のアドレスへ送付したURLより、利用開始できます。
          </Typography>
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

export default requireEmailConfirmationPage;
