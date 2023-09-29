/* eslint-disable import/extensions */
import { ROUTES } from '@shared/lib/constants'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

export const routes = createRoutesFromElements(
  <Route>
    <Route
      path={ROUTES.HOME}
      lazy={async () => {
        const { HomePage } = await import('@pages/index.page')
        return {
          Component: HomePage,
        }
      }}
    />
  </Route>,
)

export const router = createBrowserRouter(routes)
