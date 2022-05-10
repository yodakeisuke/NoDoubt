import { useRouter } from 'next/router';

import { supabase } from 'utils/supabase';

const useValidateSession = () => {
  const { push} = useRouter();
  const pushAuthenticatedUserHome = async () => {
    const user = supabase.auth.user();
    if (user) {
      push('/myHome');
    }
  }
  return {
    pushAuthenticatedUserHome,
  }
}

export default useValidateSession
