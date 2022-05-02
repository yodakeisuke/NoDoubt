import { useState } from 'react'
import { supabase } from '../../utils/supabase'

export const useMutateAuth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const reset = () => {
    setEmail('')
    setPassword('')
  }
  const loginMutation = async () => {
    const { error } = await supabase.auth.signIn({ email, password })
    return error
  }

  const registerMutation = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    return error
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
    reset,
  }
}
