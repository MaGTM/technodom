import { type FC, lazy, Suspense, type SVGAttributes, type SVGProps } from 'react'

const check = lazy(() => import('@shared/assets/icons/check-icon.svg'))

const ICONS_MAP = {
  check,
} as const

export type IconsTypes = keyof typeof ICONS_MAP

export interface IIconComponentProperties extends SVGAttributes<SVGElement> {
  name: IconsTypes
}

export const IconComponent = ({ name, ...props }: IIconComponentProperties) => {
  const Icon = ICONS_MAP[name] as FC<SVGProps<SVGSVGElement>>
  if (!Icon) return null

  return (
    <Suspense>
      <Icon role="img" {...props} />
    </Suspense>
  )
}
