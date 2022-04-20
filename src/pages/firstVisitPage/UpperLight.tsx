import React from 'react';

import { Typography } from '@mui/material';

import PaperGreen from 'components/frames/PaperGreen';

export const UpperLight: React.FC = () => {
  return (
    <PaperGreen>
      <Typography
        color="white"
        sx={{
          fontWeight: 'bold',
          fontSize: 'clamp(16px, 5vw, 20px)',
          pl: 1,
        }}
      >
        個人のレピュテーションマネジメント
      </Typography>
    </PaperGreen>
  );
};

export default UpperLight;
