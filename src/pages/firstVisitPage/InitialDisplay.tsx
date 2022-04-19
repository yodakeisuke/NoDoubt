import React from 'react';

import { Paper, Typography } from '@mui/material';

import SignUpButton from './SignUpButton';

export const InitialDisplay: React.FC = () => {
  return (
    <Paper elevation={20} sx={{ p: 2, pb: 3.5, display: 'grid', gap: 1 }}>
      <Typography variant="h5" paragraph sx={{ mt: 1, fontWeight: 'bold' }}>
        ボタンの掛け違いを清算しよう
      </Typography>
      <Typography sx={{ fontWeight: 'bold' }}>
        解ける風評は誠実に受け止めて解き、
      </Typography>
      <Typography sx={{ mb: 2, fontWeight: 'bold' }}>
        フレネミーの印象誘導に対策する。
      </Typography>
      <SignUpButton />
    </Paper>
  );
};

export default InitialDisplay;
