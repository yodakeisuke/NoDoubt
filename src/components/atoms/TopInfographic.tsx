import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Box } from '@mui/material';

import Graphic from '/public/top_infographic.webp';

interface Props {
  width?: string;
}

/**
 * 指定したwidthに合わせたアスペクト比でトップページのインフォグラフィックを返す。
 * @param  width cssのwidth
 */
export const TopInfographic: React.FC<Props> = ({width = '100%'}) => {
  return (
    <Box
      component='picture'
      sx={{width: width}}
    >
      <Link href="/" passHref>
        <Image src={Graphic} layout="responsive" alt="graphic" />
      </Link>
    </Box>
  );
};

export default TopInfographic;
