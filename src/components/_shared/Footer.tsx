import React from 'react';

import Link from 'next/link';

import { Box, Typography } from '@mui/material';

export const Footer: React.FC = () => {
  const MyGitHub: string = 'https://github.com/yodakeisuke';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'serif',
        mt: 4,
      }}
    >
      <pre>
        <Typography fontFamily="serif">Made By :</Typography>
      </pre>
      <Link href={MyGitHub}>
        <a target="_blank">Keisuke Yoda</a>
      </Link>
    </Box>
  );
};

export default Footer;
