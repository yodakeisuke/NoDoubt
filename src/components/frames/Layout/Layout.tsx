import { FC, ReactNode } from 'react';

import Head from 'next/head';

import { Box } from '@mui/material';

import Footer from 'components/parts/Footer/Footer';

type Props = {
  title: string;
  header?: ReactNode | undefined;
  children: ReactNode;
};

const Layout: FC<Props> = ({ title, header, children }) => {
  return (
    <Box className="layout">
      <Head>
        <title>{title}</title>
        <meta name="Button up" content="Personal reputation management app" />
      </Head>
      <Box
        className="wholeContainer"
        sx={{
          maxWidth: { xs: '100%', md: '45vw' },
          mx: 'auto',
        }}
      >
        <header>{header}</header>
        <Box
          component="main"
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
