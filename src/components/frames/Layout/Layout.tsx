import React, { ReactNode } from 'react';

import Head from 'next/head';

import { Box } from '@mui/material';

import Footer from 'components/parts/Footer/Footer';

type Props = {
  title: string;
  header: ReactNode;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ title, header, children }) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="Button up" content="Personal reputation management app" />
      </Head>
      <Box
        sx={{
          width: { xs: '100%', md: '60vw' },
          mx: 'auto',
        }}
      >
        <header>
          {header}
        </header>
        <Box
          component='main'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {children}
        </Box>
        <footer>
          <Footer />
        </footer>
      </Box>
    </Box>
  );
};

export default Layout;
