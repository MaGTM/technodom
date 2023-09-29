import './styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'

import type { ComponentType } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { StoreProvider } from './config/store'
import { ComposeProviders } from './lib'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <ComposeProviders>
        <StoreProvider>
          <App />
          <ToastContainer position="top-right" autoClose={5000} closeOnClick />
        </StoreProvider>
      </ComposeProviders>
    </StrictMode>,
  )
}

export default render
