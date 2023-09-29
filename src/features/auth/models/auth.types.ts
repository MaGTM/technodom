export enum AuthScreen {
  Login,
  Registration,
  ForgotPassword,
}

export interface AuthState {
  screen: AuthScreen
  phone: string
}
