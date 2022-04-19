import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { Box } from '@mui/material';

import FirstVisitPage from './firstVisitPage/_templateFirstVisit';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>ButtonUp!</title>
        <meta name="Button up" content="Personal reputation management app" />
      </Head>
      <FirstVisitPage />
    </Box>
  );
};

export default Home;
