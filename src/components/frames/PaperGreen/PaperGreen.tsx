import { FC, ReactNode } from 'react';

import { Paper } from '@mui/material';

import ColorCode from 'global/types/ColorCode';

interface Props {
  children: ReactNode;
}

/**
 * 背景グリーンの枠
 */
export const PaperGreen: FC<Props> = ({ children }) => {
  return (
    <Paper
      className="PaparGreen"
      component="article"
      elevation={1}
      sx={{
        p: 0.5,
        backgroundColor: ColorCode.GREEN,
        width: '100%',
        mb: 2,
        display: 'grid',
        alignItems: 'center',
      }}
    >
      {children}
    </Paper>
  );
};

export default PaperGreen;
