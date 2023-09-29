import { genericMemo } from '@shared/lib/utils'
import type { InputHTMLAttributes } from 'react'
import type { FieldValues, UseControllerProps } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { MaskInput } from './mask.input'

interface IControlledMaskInputProperties<T extends FieldValues>
  extends UseControllerProps<T>,
    Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'readOnly' | 'type'> {
  label?: string
  isLoading?: boolean
}

export const ControlledMaskInput = genericMemo(
  <T extends FieldValues>(props: IControlledMaskInputProperties<T>) => {
    const { control, name, ...nativeInputProperties } = props

    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <MaskInput
            {...nativeInputProperties}
            onChange={onChange}
            error={error?.message}
            mask="{@}aaaaaaaaaaaaaaaa"
          />
        )}
      />
    )
  },
)
