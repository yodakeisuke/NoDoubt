import React from 'react';

import { Box, Paper } from '@mui/material';

import Layout from 'components/frames/Layout/Layout';
import ThemeLogoVariable from 'components/parts/ThemeLogoVariable/ThemeLogoVariable';
import InitialDisplay from '../firstVisitPage/InitialDisplay/InitialDisplay';
import UpperLight from '../firstVisitPage/UpperLight/UpperLight';
import TopInfographic from 'components/parts/TopInfographic/TopInfographic';
import PaperGreen from 'components/frames/PaperGreen/PaperGreen';

/**
 * 初回訪問時の表示ページ。
 */
export const FirstVisitPage: React.FC = () => {
  return (
    <Layout title='Home - ButtonUp!' header={<UpperLight />} >
      <PaperGreen>
        <Box
          component="section"
          sx={{
            padding: 2,
            mb: 1,
            display: 'grid',
            justifyContent :'center',
            gap: 2.5,
          }}
        >
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
    </Layout>
  );
};

export default FirstVisitPage;
