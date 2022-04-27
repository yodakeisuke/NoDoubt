import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Box } from '@mui/material';

import MainLogo from '/public/logo.webp';
import { SxProps, Theme } from '@mui/material/styles';

interface Props {
  sx?: SxProps<Theme> | undefined;
}

/**
 * ルートへのリンク付きメインロゴ。MUIのBoxでラップしておりsxPropを受ける。
 * @param  sx
 */
export const ThemeLogo: React.FC<Props> = ({ sx }) => {
  return (
    <Box className="themeLogo" component="picture" sx={sx}>
      <Link href="/" passHref>
        <Image src={MainLogo} layout="responsive" alt="mainlogo" />
      </Link>
    </Box>
  );
};

export default ThemeLogo;
