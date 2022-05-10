import { FC, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { AccountFormType } from 'global/types/AccountForm';
import { useMutateAuth } from 'hooks/useMutationAuth';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

// todo 分割formとsnackbar
export const AccountForm: FC = () => {
  const { errorMsg, setErrorMsg, loginMutation, registerMutation } =
    useMutateAuth();
  const [forSignUp, setForSignUp] = useState(false);
  const { control, handleSubmit } = useForm<AccountFormType>();
  const onSubmit: SubmitHandler<AccountFormType> = ({ email, password }) => {
    forSignUp
      ? registerMutation({ email, password })
      : loginMutation({ email, password });
  };

  const validationRules = {
    email: {
      required: 'メールアドレスを入力してください。',
    },
    password: {
      required: 'パスワードを入力してください。',
      minLength: { value: 8, message: '8文字以上で入力してください。' },
    },
  };
  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      spacing={3}
      sx={{
        m: 2,
        width: '15rem',
        display: 'grid',
        mx: 'auto',
      }}
    >
      <HowToRegIcon fontSize="large" sx={{ mx: 'auto' }} />
      <Controller
        name="email"
        control={control}
        rules={validationRules.email}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="text"
            label="メールアドレス"
            error={fieldState.error ? true : false}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={validationRules.password}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="text"
            label="パスワード"
            error={fieldState.error ? true : false}
            helperText={fieldState.error?.message}
          />
        )}
      />

      <Button
        type="button"
        onClick={() => setForSignUp(!forSignUp)}
        variant="text"
      >
        {forSignUp
          ? 'アカウントをお持ちの場合'
          : 'アカウントをお持ちでない場合'}
      </Button>
      <Button type="submit" variant="contained">
        {forSignUp ? '新規登録' : 'ログイン'}
      </Button>
      <Snackbar
        open={errorMsg ? true : false}
        autoHideDuration={6000}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Alert
          severity="error"
          sx={{ width: '100%' }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setErrorMsg('');
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {errorMsg}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default AccountForm;
