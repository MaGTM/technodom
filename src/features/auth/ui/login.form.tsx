import { useAppDispatch } from '@app/config/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { NON_EMPTY, TYPE_ERROR } from '@shared/lib/constants'
import { Button } from '@shared/ui/button'
import { ControlledInput } from '@shared/ui/input'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { setScreen } from '../models/auth.slice'
import { AuthScreen } from '../models/auth.types'

const schema = z.object({
  password: z.string(TYPE_ERROR).nonempty(NON_EMPTY),
})

type FormValues = z.infer<typeof schema>

export const LoginForm = () => {
  const dispatch = useAppDispatch()

  const { control, handleSubmit, watch } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data, 'success')
  }

  const forgotPasswordHandler = () => {
    dispatch(setScreen(AuthScreen.ForgotPassword))
  }

  return (
    <form className="flex flex-col gap-[1.25rem]" onSubmit={handleSubmit(submitHandler)}>
      <ControlledInput
        control={control}
        name="password"
        placeholder="Пароль"
        type="password"
      />
      <Button text="Войти" disabled={!watch('password')} type="submit" />
      <Button
        text="Забыли пароль?"
        variant="transparent-underlined"
        onClick={forgotPasswordHandler}
        type="button"
        className="!h-fit !w-fit self-center"
      />
    </form>
  )
}
