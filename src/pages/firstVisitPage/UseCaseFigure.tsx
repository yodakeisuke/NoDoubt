import React from 'react';

import { Box, Typography } from '@mui/material';


/**
 * 初回訪問時の表示ページ。
 */
export const UseCaseFigure: React.FC = () => {
  return (
    <Box
      component='figure'
      sx={{
        display: 'grid',
        justifyContent: 'center',
      }}
    >
    </Box>
  );
};

export default UseCaseFigure;
