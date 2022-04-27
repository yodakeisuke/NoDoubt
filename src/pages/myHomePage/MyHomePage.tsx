import React from 'react';

import LeakList from './LeakList/LeakList';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import Layout from 'components/frames/Layout/Layout';
import Header from 'components/parts/Header/Header';
import PaperGreen from 'components/frames/PaperGreen/PaperGreen';
import ButtonPrimary from 'components/parts/ButtonPrimary/ButtonPrimary';
import StripeTape from 'components/frames/StripeTape/StripeTape';

/**
 * ログイン後のホーム画面。
 */
export const MyHomePage: React.FC = () => {
  return (
    <Layout title="Home - ButtonUp!" header={<Header />}>
      <PaperGreen>
        <Box
          className="reviewBoxContainer"
          sx={{ display: 'grid', gap: 2.5, alignItems: 'center' }}
        >
          <StripeTape sx={{ mx: 'auto', mt: 1 }}>
            <Typography variant="subtitle2">usernameのクチコミ箱</Typography>
          </StripeTape>
          <Divider />
          <ButtonPrimary width="150px">募集する！</ButtonPrimary>
          <LeakList />
        </Box>
      </PaperGreen>
    </Layout>
  );
};

export default MyHomePage;
