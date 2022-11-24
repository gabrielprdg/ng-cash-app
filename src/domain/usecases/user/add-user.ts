import { UserModel } from '../../../domain/models/user'

export type AddUserParams = {
  username: string
  password: string
  account: any
}

export interface AddUser {
  add: (userData: AddUserParams) => Promise<UserModel>
}
