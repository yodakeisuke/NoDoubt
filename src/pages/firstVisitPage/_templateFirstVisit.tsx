import React from 'react';

import { Box, Paper } from '@mui/material';

import ThemeLogoVariable from 'components/atoms/ThemeLogoVariable';
import InitialDisplay from './InitialDisplay';
import Footer from 'components/organism/Footer';
import ColorCode from 'global/types/ColorCode';
import UpperLight from './UpperLight';
import TopInfographic from 'components/atoms/TopInfographic';

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
          backgroundColor: ColorCode.GREEN,
          py: 4,
          width:  '100%',
        }}
      >
        <ThemeLogoVariable width='clamp(310px, 50vw, 370px)' />
        <Box
          component='section'
          sx={{m :2}}
        >
          <InitialDisplay />
        </Box>
      </Paper>
      <Paper
        component='aside'
        elevation={10}
        sx={{
          m: 1,
          width:  '100%',
        }}
      >
        <TopInfographic width='100%'/>
      </Paper>
      <Footer />
    </Box>
  );
};

export default FirstVisitPage;
