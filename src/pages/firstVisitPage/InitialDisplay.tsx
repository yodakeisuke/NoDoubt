import React from 'react';

import { Box, Button, Paper, Typography } from '@mui/material';
import SignUpButton from './SignUpButton';

export const InitialDisplay: React.FC = () => {
  return (
    <Paper
      elevation={20}
      sx={{p: 2, display: 'grid', gap: 1}}
    >
      <Typography
        variant='h5'
        sx={{mt: 1, mb: 2}}
      >
        ボタンの掛け違いを清算しよう
      </Typography>
      <Typography>
        わだかまりは解き、誤解は払い、
      </Typography>
      <Typography
        sx={{mb: 2}}
      >
        フレネミーの印象誘導に対策する。
      </Typography>
      <SignUpButton />


    </Paper>
  );
};

export default InitialDisplay;
