import { FC } from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import InfoIcon from '/public/info_icon.svg';

const UserInfo: FC = () => {
  const userName = 'testUser';
  return (
    <Box
      className="userInfoContainer"
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={0.5}
      alignItems="center"
      mx="auto"
    >
      <Box className="userInfoContainer" gridColumn="span 4" textAlign="center">
        <Image
          src={InfoIcon}
          layout="fixed"
          alt="infoIcon"
          width="90"
          height="90"
        />
      </Box>
      <Box gridColumn="span 8">
        <Typography variant="h5" fontWeight="bold" fontFamily="-moz-initial">
          {userName} の
        </Typography>
        <Typography variant="h5" fontWeight="bold" fontFamily="-moz-initial">
          クチコミ箱
        </Typography>
      </Box>
    </Box>
  );
};

export default UserInfo;
