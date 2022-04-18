import React from 'react';

import { Paper, Typography } from '@mui/material';

import ColorCode from 'global/types/ColorCode';

export const UpperLight: React.FC = () => {
  return (
    <Paper
      component='h1'
      elevation={10}
      sx={{
        my: 1,
        padding: 1,
        backgroundColor: ColorCode.GREEN,
        width: '100%',
      }}
    >
      <Typography
      color='white'
      sx={{
        fontWeight: 'bold',
        fontSize: 'clamp(15px, 4vw, 20px)',
        pl: 0.3,
      }}
      >
        個人のレピュテーションマネジメント
      </Typography>
    </Paper>
  );
};

export default UpperLight;
