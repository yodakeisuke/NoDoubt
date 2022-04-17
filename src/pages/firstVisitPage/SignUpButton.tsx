import React from 'react';

import { Fab } from '@mui/material';

import ColorCode from 'global/types/ColorCode';

/**
 * トップページからの登録/ログインボタン。
 * サインアップorサインイン画面に遷移
 */
export const SignUpButton: React.FC = () => {
  return (
    <Fab
      variant="extended"
      color='secondary'
      size='medium'
      sx={{
        width: '85%',
        color: 'white',
        fontSize: '1rem',
        fontWeight: 'bold',
        mx: 'auto'
      }}
    >
        登録／ログイン
    </Fab>
  );
};

export default SignUpButton;
