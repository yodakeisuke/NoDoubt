import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Box } from '@mui/material';

import ColorCode from 'global/types/ColorCode';
import MainLogo from '/public/themeLogo.webp';

interface Props {
  width: string;
}

/**
 * 指定したwidthに合わせたアスペクト比でロゴを返す。
 * @param  width cssのwidth
 */
export const ThemeLogoVariable: React.FC<Props> = (width) => {
  return (
    <Box
      component='picture'
      sx={{width: width}}
    >
      <Link href="/" passHref>
        <Image src={MainLogo} layout="responsive" alt="mainlogo" />
      </Link>
    </Box>
  );
};

export default ThemeLogoVariable;
