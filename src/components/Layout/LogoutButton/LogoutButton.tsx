import { FC } from 'react';

import { supabase } from 'utils/supabase';

import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

const LogoutButton: FC = () => {
  const signOut = () => {
    supabase.auth.signOut();
  };
  return (
    <IconButton sx={{ pb: 0.3 }}>
      <LogoutIcon color="info" onClick={signOut} />
    </IconButton>
  );
};

export default LogoutButton;
