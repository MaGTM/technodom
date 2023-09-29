import clsx from 'clsx'
import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'
import { memo, useState } from 'react'

interface IInputProperties
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (value: string) => void

  error?: string | boolean
  label?: string
  leftContent?: ReactNode
  className?: string
  isLoading?: boolean

  /*
   * Do not touch, used for mask-input
   */
  _innerRef?: never
}

export const Input = memo((props: IInputProperties) => {
  const {
    onChange,
    label,
    error,
    leftContent,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _innerRef,
    className,
    onBlur,
    ...nativeProperties
  } = props

  const [isFocus, setIsFocus] = useState(false)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    onChange(value)
  }

  const borderHandler = () => {
    if (error) return 'border-error'
    if (isFocus) return 'border-primary'
    return 'border-black-40'
  }

  return (
    <div>
      {label && <p>{label}</p>}
      <div
        className={clsx(
          'flex items-center rounded-[0.69rem] border-basic px-[0.76rem] transition-[border] duration-300',
          borderHandler(),
        )}
      >
        {leftContent && <div className="mr-[0.62rem]">{leftContent}</div>}
        <input
          {...nativeProperties}
          onChange={changeHandler}
          className={clsx(
            'h-input w-full outline-none placeholder:text-placeholder',
            className,
          )}
          onClick={(e) => e.stopPropagation()}
          onFocus={() => setIsFocus(true)}
          onBlur={(e) => {
            if (onBlur) {
              onBlur(e)
            }
            setIsFocus(false)
          }}
          // Used for mask-input, do not change
          ref={_innerRef}
        />
      </div>
      {error && typeof error === 'string' && (
        <p className="mt-[0.21rem] text-left text-small text-error">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'
