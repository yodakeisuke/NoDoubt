import React from 'react';

import Leak from '../Leak/Leak';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import AnswerStatusTab from '../AnswerStatusTab/AnswerStatusTab';

/**
 * 募集に対して送られた投稿の一覧
 * インタラクション：
 */
export const LeakList: React.FC = () => {
  return (
    <Box>
      <AnswerStatusTab />
      <Stack className="leakList" spacing={2} sx={{ my: 3 }}>
        <Leak />
      </Stack>
    </Box>
  );
};

export default LeakList;
