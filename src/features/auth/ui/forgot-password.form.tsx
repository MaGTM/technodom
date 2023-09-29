import { useAppDispatch } from '@app/config/store'
import { Button } from '@shared/ui/button'
import { toast } from 'react-toastify'

import { setScreen } from '../models/auth.slice'
import { AuthScreen } from '../models/auth.types'

export const ForgotPasswordForm = () => {
  const dispatch = useAppDispatch()

  const forgotPasswordHandler = () => {
    toast('Successfully reset password')
    dispatch(setScreen(AuthScreen.Login))
  }

  return <Button text="Восстановить" onClick={forgotPasswordHandler} />
}
