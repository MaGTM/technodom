import type { FactoryOpts, Masked } from 'imask'
import type { InputHTMLAttributes } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useIMask } from 'react-imask'

import { Input } from './input.component'

interface IMaskInputProperties
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  mask: string | RegExp
  onChange: (value: string) => void
  error?: string | boolean
  value?: string
}

export const MaskInput = (props: IMaskInputProperties) => {
  const { mask, onChange, value: controlledValue, ...nativeInputProperties } = props

  const [options] = useState<FactoryOpts>({ mask: mask as unknown as Masked })
  const { ref, value, setValue, maskRef } = useIMask(options)

  const changeHandler = (newValue: string) => {
    setValue(newValue)
  }

  const updateValueHandler = useCallback(() => {
    maskRef.current?.updateValue()
    maskRef.current?.updateControl()
  }, [])

  useEffect(() => {
    onChange(value)
  }, [value])

  useEffect(() => {
    setValue(controlledValue ?? '')
  }, [controlledValue])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    ref.current?.addEventListener('click', updateValueHandler)

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      ref.current?.removeEventListener('click', updateValueHandler)
    }
  }, [])

  return (
    <Input
      {...nativeInputProperties}
      value={value}
      _innerRef={ref as never}
      onChange={changeHandler}
    />
  )
}
