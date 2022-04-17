import React from 'react';

import { Box, Paper } from '@mui/material';

import ThemeLogoVariable from 'components/atoms/ThemeLogoVariable';
import InitialDisplay from './InitialDisplay';
import Footer from 'components/organism/Footer';
import ColorCode from 'global/types/ColorCode';
import UpperLight from './UpperLight';

/**
 * 初回訪問時の表示ページ。
 */
export const FirstVisitPage: React.FC = () => {
  return (
    <Box
      component='main'
      sx={{
        display: 'grid',
        justifyContent: 'center',
        justifyItems: 'center',
      }}
    >
      <UpperLight />
      <Paper
        component='article'
        elevation={10}
        sx={{
          display: 'grid',
          justifyContent: 'center',
          justifyItems: 'center',
          backgroundColor: ColorCode.DEEP_DARK_BLUE,
          py: 4,
          width:  '100%',
        }}
      >
        <ThemeLogoVariable width='clamp(250px, 50vw, 400px)' />
        <Box
          component='section'
          sx={{m :3}}
        >
          <InitialDisplay />
        </Box>
      </Paper>

      <Footer />
      </Box>
  );
};

export default FirstVisitPage;
