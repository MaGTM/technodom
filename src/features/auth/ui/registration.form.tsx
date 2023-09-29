import { zodResolver } from '@hookform/resolvers/zod'
import { EMAIL_ERROR, NON_EMPTY, TYPE_ERROR } from '@shared/lib/constants'
import { Button } from '@shared/ui/button'
import { ControlledCheckbox } from '@shared/ui/checkbox'
import { ControlledInput } from '@shared/ui/input'
import { useEffect } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z
  .object({
    name: z.string(TYPE_ERROR).nonempty(NON_EMPTY),
    email: z.string(TYPE_ERROR).email(EMAIL_ERROR),
    password: z.string(TYPE_ERROR).nonempty(NON_EMPTY),
    confirmPassword: z.string(TYPE_ERROR).nonempty(NON_EMPTY),
    isPersonal: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof schema>

export const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <form
      className="flex flex-col gap-[1.25rem]"
      onSubmit={handleSubmit(submitHandler)}
      noValidate
    >
      <ControlledInput control={control} name="name" placeholder="Имя" />
      <ControlledInput control={control} name="email" placeholder="Email" type="email" />
      <ControlledInput
        control={control}
        name="password"
        placeholder="Пароль"
        type="password"
      />
      <ControlledInput
        control={control}
        name="confirmPassword"
        placeholder="Повторите пароль"
        type="password"
      />
      <ControlledCheckbox
        control={control}
        name="isPersonal"
        label="Я соглашаюсь с полтиткой конфиденциальности"
      />
      <Button
        text="Зарегестрироваться"
        type="submit"
        disabled={!isValid || !watch('isPersonal')}
      />
    </form>
  )
}
