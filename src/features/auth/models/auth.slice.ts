import type { RootState } from '@app/config/store'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { AuthState } from './auth.types'
import { AuthScreen } from './auth.types'

const initialState: AuthState = {
  screen: AuthScreen.Login,
  phone: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<AuthScreen>) => {
      state.screen = action.payload
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
  },
})

export const { setScreen, setPhone } = authSlice.actions

export const selectCurrentScreen = (state: RootState) => state.auth.screen
export const selectPhone = (state: RootState) => state.auth.phone

export default authSlice.reducer
