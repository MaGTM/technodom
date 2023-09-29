import type { PropsWithChildren } from 'react'
import { memo } from 'react'

export const genericMemo: <T>(
  component: T,
  propsAreEqual?: (
    previousProperties: PropsWithChildren<T>,
    nextProperties: PropsWithChildren<T>,
  ) => boolean,
) => T = memo
