import React from 'react';

import { Fab } from '@mui/material';

interface Props {
  children: string;
  width?: string;
}

/**
 * トップページからの登録/ログインボタン。
 * todo: インタラクションを注入できるように？
 */
export const ButtonPrimary: React.FC<Props> = ({ children, width }) => {
  return (
    <Fab
      className="buttonPrimary"
      variant="extended"
      color="primary"
      size="medium"
      sx={{
        width: width,
        fontSize: '1rem',
        fontWeight: 'bold',
        mx: 'auto',
      }}
    >
      {children}
    </Fab>
  );
};

export default ButtonPrimary;
