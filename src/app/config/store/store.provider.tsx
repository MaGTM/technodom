import type { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from './store'

interface IStoreProviderProperties {
  children: ReactNode
}

export const StoreProvider = (props: IStoreProviderProperties) => {
  const { children } = props

  return <Provider store={store}>{children}</Provider>
}
