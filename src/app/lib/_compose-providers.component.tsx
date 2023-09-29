import { type ReactElement } from 'react'
import { HelmetProvider } from 'react-helmet-async'

interface IComposeProvidersProperties {
  children?: ReactElement
}

export const ComposeProviders = (props: IComposeProvidersProperties) => {
  return <HelmetProvider>{props.children}</HelmetProvider>
}
