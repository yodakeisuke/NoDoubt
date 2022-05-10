import { useEffect } from 'react';

import type { NextPage } from 'next';

import { Box } from '@mui/material';

import FirstVisitPage from 'components/index/FirstVisitPage';
import useValidateSession from 'hooks/useValidateSession';

const Home: NextPage = () => {
  const { pushAuthenticatedUserHome } = useValidateSession();
  useEffect(() => {
    pushAuthenticatedUserHome();
  }, [pushAuthenticatedUserHome]);

  return (
    <Box>
      <FirstVisitPage />
    </Box>
  );
};

export default Home;
