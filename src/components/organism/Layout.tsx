import React, { ReactNode } from 'react';

import Head from 'next/head';

import { Box } from '@mui/material';

import Footer from 'components/organism/Footer';

type Props = {
  title: string;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <header>{'header'}</header>
      <main>
        <Box sx={{ mx: 'auto', width: '85%', mt: 3 }}>{children}</Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
