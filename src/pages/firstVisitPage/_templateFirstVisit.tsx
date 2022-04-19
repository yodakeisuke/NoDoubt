import React from 'react';

import { Box, Paper } from '@mui/material';

import ThemeLogoVariable from 'components/atoms/ThemeLogoVariable';
import InitialDisplay from './InitialDisplay';
import Footer from 'components/organism/Footer';
import UpperLight from './UpperLight';
import TopInfographic from 'components/atoms/TopInfographic';
import PaperGreen from 'components/frames/PaperGreen';

/**
 * 初回訪問時の表示ページ。
 */
export const FirstVisitPage: React.FC = () => {
  return (
    <Box
      component="main"
      sx={{
        display: 'grid',
        justifyContent: 'center',
        justifyItems: 'center',
      }}
    >
      <UpperLight />
      <PaperGreen>
        <Box
          component="section"
          sx={{
            padding: 2,
            mb: 1,
            display: 'grid',
            gap: 2.5,
          }}>
          <ThemeLogoVariable width="clamp(310px, 50vw, 370px)" />
          <InitialDisplay />
        </Box>
      </PaperGreen>
      <Paper
        component="aside"
        elevation={10}
        sx={{
          m: 0.5,
          width: '100%',
        }}
      >
        <TopInfographic width="100%" />
      </Paper>
      <Footer />
    </Box>
  );
};

export default FirstVisitPage;
