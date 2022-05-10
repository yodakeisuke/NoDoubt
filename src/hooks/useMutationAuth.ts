import { useState } from 'react';
import { useRouter } from 'next/router';

import { supabase } from 'utils/supabase'

import { AccountFormType } from 'global/types/AccountForm';

export const useMutateAuth = () => {
  const { push } = useRouter();
  const [errorMsg, setErrorMsg] = useState<string | undefined>()

  const loginMutation = async ({email, password}: AccountFormType) => {
    const { error } = await supabase.auth.signIn({ email, password })
    if (error) setErrorMsg(error.message);
  }

  const registerMutation = async ({email, password}: AccountFormType) => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error)  {
      setErrorMsg(error.message);
    }
    else {
    push('/requireEmailConfirmationPage');
    }
  }

  return {
    errorMsg,
    setErrorMsg,
    loginMutation,
    registerMutation,
  }
}
