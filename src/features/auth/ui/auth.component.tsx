import { useAppDispatch, useAppSelector } from '@app/config/store'
import { selectCurrentScreen, selectPhone, setPhone, setScreen } from '@features/auth'
import { MaskInput } from '@shared/ui/input'
import { useEffect, useState } from 'react'

import { CORRECT_PHONE_NUMBER } from '../__mocks__/phone-number'
import { AuthScreen } from '../models/auth.types'
import { ForgotPasswordForm } from './forgot-password.form'
import { LoginForm } from './login.form'
import { RegistrationForm } from './registration.form'

const screens = {
  [AuthScreen.Login]: {
    component: <LoginForm />,
    title: 'Авторизация',
  },
  [AuthScreen.Registration]: {
    component: <RegistrationForm />,
    title: 'Регистрация',
  },
  [AuthScreen.ForgotPassword]: {
    component: <ForgotPasswordForm />,
    title: 'Забыли пароль?',
  },
}

export const Auth = () => {
  const currentScreen = useAppSelector(selectCurrentScreen)
  const phone = useAppSelector(selectPhone)
  const dispatch = useAppDispatch()

  const [isPhone, setIsPhone] = useState(false)

  const changeHandler = (value: string) => {
    if (value.length === 18) {
      setIsPhone(true)
      dispatch(setPhone(value))
    }
    if (value.length < 18 && isPhone) {
      setIsPhone(false)
    }
  }

  useEffect(() => {
    if (!isPhone) {
      dispatch(setScreen(AuthScreen.Login))
      return
    }
    const formattedNumber = phone.split(/[\s()+]/gm).join('')

    if (formattedNumber === CORRECT_PHONE_NUMBER) {
      dispatch(setScreen(AuthScreen.Login))
    } else {
      dispatch(setScreen(AuthScreen.Registration))
    }
  }, [isPhone])

  return (
    <div>
      <h2 className="text-center text-heading">{screens[currentScreen].title}</h2>
      <div className="mt-[1.5rem] flex w-[20rem] flex-col gap-[1.25rem]">
        <MaskInput
          mask="+7 (000) 000 00 00"
          onChange={changeHandler}
          placeholder="+7 (705) 964 84 85"
        />
        {isPhone && screens[currentScreen].component}
      </div>
    </div>
  )
}
