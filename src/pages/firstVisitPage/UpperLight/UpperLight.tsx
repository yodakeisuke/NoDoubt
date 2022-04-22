import React from 'react';

import { Box, Typography } from '@mui/material';

import PaperGreen from 'components/frames/PaperGreen/PaperGreen';
import ColorCode from 'global/types/ColorCode';

export const UpperLight: React.FC = () => {
  return (
    <PaperGreen>
      <Box
        sx={{width: '100%'}}
      >
        <Typography
          color={ColorCode.OFF_WHITE}
          sx={{
            fontWeight: 'bold',
            fontSize: 'clamp(16px, 5vw, 20px)',
            pl: 1,
            width: '100%',
          }}
        >
          個人のレピュテーションマネジメント
        </Typography>
      </Box>
    </PaperGreen>
  );
};

export default UpperLight;
