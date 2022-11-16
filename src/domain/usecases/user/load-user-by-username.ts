import { UserModel } from 'domain/models/user'

export interface LoadUserByUserName {
  loadByUsername: (username: string) => Promise<UserModel>
}
