export type AddUserParams = {
  username: string
  password: string
}

export interface AddUser {
  add: (userData: AddUserParams) => Promise<string>
}
