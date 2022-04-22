import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Box, Card } from '@mui/material';

import Graphic from '/public/top_infographic.webp';

/**
 * ホーム画面へ表示するユーザ情報
 */
export const ProfileCard: React.FC = () => {
  return (
    <Card>
      <Link href="/" passHref>
        {'ポートレート'}
      </Link>
    </Card>
  );
};

export default ProfileCard;
