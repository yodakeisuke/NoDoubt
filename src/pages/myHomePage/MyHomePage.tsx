import React from 'react';

import { Box, Paper } from '@mui/material';

import Layout from 'components/frames/Layout/Layout';
import UpperLight from '../firstVisitPage/UpperLight/UpperLight';
import PaperGreen from 'components/frames/PaperGreen/PaperGreen';

/**
 * ログイン後のホーム画面。
 */
export const MyHomePage: React.FC = () => {
  return (
    <Layout title='Home - ButtonUp!' header={<UpperLight />}>
      <PaperGreen>
        <Box
          component="section"
          sx={{
            padding: 2,
            mb: 1,
            display: 'grid',
            gap: 2.5,
          }}
        >
        {'ユーザ'}
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
        {'募集ボタン'}
      </Paper>
    </Layout>
  );
};

export default MyHomePage;
