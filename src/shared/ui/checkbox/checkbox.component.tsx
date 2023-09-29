import clsx from 'clsx'
import type { ChangeEvent, ReactNode } from 'react'
import { memo } from 'react'

import { IconComponent } from '../icon'

interface ICheckboxProperties {
  checked: boolean
  onChange: (value: boolean) => void

  label?: ReactNode
  className?: string
}

const defaultClassNames =
  'w-[1.04167rem] min-w-[1.04167rem] h-[1.04167rem] rounded-[0.28rem] border-basic overflow-hidden'

export const Checkbox = memo((props: ICheckboxProperties) => {
  const { checked = false, label, onChange, className } = props

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked: nativeChecked } = e.target

    onChange(nativeChecked)
  }

  return (
    <label
      className={clsx(
        'flex w-fit cursor-pointer select-none items-center gap-[0.56rem]',
        className,
      )}
    >
      {checked ? (
        <div
          className={clsx(
            defaultClassNames,
            'flex items-center justify-center bg-primary',
          )}
        >
          <IconComponent name="check" className="w-[0.83333rem]" />
        </div>
      ) : (
        <div className={clsx(defaultClassNames, 'border-black-40 bg-white')} />
      )}
      {label}

      <input
        type="checkbox"
        className="hidden"
        onChange={changeHandler}
        checked={checked}
      />
    </label>
  )
})

Checkbox.displayName = 'Checkbox'
