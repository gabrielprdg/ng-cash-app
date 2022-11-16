export type AuthenticationParams = {
  username: string
  password: string
}

export interface Authentication {
  auth: (authentication: AuthenticationParams) => Promise<string>
}
