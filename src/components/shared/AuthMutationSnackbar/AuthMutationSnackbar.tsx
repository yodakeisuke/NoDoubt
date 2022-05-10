import { Dispatch, FC, SetStateAction, useState } from 'react';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import type { AuthMutationType } from 'global/types/AuthMutationType';

// todo: snackbar共通化

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  mutation: AuthMutationType;
};

export const AuthMutationSnackbar: FC<Props> = ({
  open,
  setOpen,
  mutation,
}) => {
  const messageVariant = {
    login: 'ログインしました。',
    logout: 'ログアウトしました。',
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert
        severity="info"
        sx={{ width: '100%' }}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {mutation ? messageVariant[mutation] : ''}
      </Alert>
    </Snackbar>
  );
};
