import React, { ReactNode } from 'react';

import { Paper } from '@mui/material';

import ColorCode from 'global/types/ColorCode';

interface Props {
  children: ReactNode;
}

/**
 * 背景グリーンの枠
 */
export const PaperGreen: React.FC<Props> = ({ children }) => {
  return (
    <Paper
      component="article"
      elevation={10}
      sx={{
        my: 0.5,
        px: 1,
        py: 1.5,
        backgroundColor: ColorCode.GREEN,
        width: '100%',
      }}
    >
      {children}
    </Paper>
  );
};

export default PaperGreen;
