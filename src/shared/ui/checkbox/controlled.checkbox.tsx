import { genericMemo } from '@shared/lib/utils'
import type { ReactNode } from 'react'
import type { FieldValues, UseControllerProps } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { Checkbox } from './checkbox.component'

interface IControlledCheckboxProperties<T extends FieldValues>
  extends UseControllerProps<T> {
  label?: ReactNode
  className?: string
}

export const ControlledCheckbox = genericMemo(
  <T extends FieldValues>(props: IControlledCheckboxProperties<T>) => {
    const { control, name, ...checkboxProperties } = props

    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            {...checkboxProperties}
            onChange={(newValue) => onChange(newValue)}
            checked={value}
          />
        )}
      />
    )
  },
)
