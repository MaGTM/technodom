import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import { memo } from 'react'

type ButtonVariant = 'primary' | 'transparent-underlined'

interface IButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string

  variant?: ButtonVariant
  className?: string
}

const defaultClasses =
  'w-full h-input rounded-[1rem] disabled:opacity-50 leading-[0.875rem]'

export const Button = memo((props: IButtonProperties) => {
  const { variant = 'primary', text, className, ...nativeProperties } = props

  const buttonClassNames = () => {
    switch (variant) {
      case 'primary': {
        return 'bg-primary text-white'
      }
      case 'transparent-underlined': {
        return 'text-primary underline underline-offset-2'
      }
      default: {
        return ''
      }
    }
  }

  return (
    <button
      type="button"
      {...nativeProperties}
      className={clsx(defaultClasses, buttonClassNames(), className)}
    >
      {text}
    </button>
  )
})

Button.displayName = 'Button'
