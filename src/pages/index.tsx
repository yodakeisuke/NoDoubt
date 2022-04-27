import React from 'react';

import type { NextPage } from 'next';

import { Box, FormControlLabel, FormGroup, Switch } from '@mui/material';

import FirstVisitPage from 'pages/firstVisitPage/FirstVisitPage';
import MyHomePage from 'pages/myHomePage/MyHomePage';

const Home: NextPage = () => {
  const [auth, setAuth] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  return (
    <Box>
      {/*/開発時オンリー*/}
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'nowLogin' : 'nowLogout'}
        />
      </FormGroup>
      {auth ? <MyHomePage /> : <FirstVisitPage />}
    </Box>
  );
};

export default Home;
