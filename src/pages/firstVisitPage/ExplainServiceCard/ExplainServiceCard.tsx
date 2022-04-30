import { FC } from 'react';
import Link from 'next/link';

import { Paper, Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';

import ButtonPrimary from 'components/parts/ButtonPrimary/ButtonPrimary';

export const ExplainServiceCard: FC = () => {
  return (
    <Paper
      className="explainServiceCard:"
      elevation={1}
      sx={{
        p: 4,
        pb: 3.5,
        display: 'grid',
        gap: 1,
        width: '90%',
        mx: 'auto',
      }}
    >
      <Typography variant="h5" paragraph sx={{ mt: 1, fontWeight: 'bold' }}>
        ボタンの掛け違いを清算しよう
      </Typography>
      <Typography sx={{ fontWeight: 'bold' }}>
        解ける風評は誠実に受け止めて解き、
      </Typography>
      <Typography sx={{ mb: 2, fontWeight: 'bold' }}>
        フレネミーの足の引っ張りに対策する。
      </Typography>
      <Link href="/auth/Auth" as="auth" passHref>
        <MuiLink underline="none" color="inherit" textAlign="center">
          <ButtonPrimary width="85%">登録／ログイン</ButtonPrimary>
        </MuiLink>
      </Link>
    </Paper>
  );
};

export default ExplainServiceCard;
