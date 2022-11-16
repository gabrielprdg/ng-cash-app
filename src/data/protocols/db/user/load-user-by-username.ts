import { UserModel } from 'domain/models/user'

export interface LoadUserByUserNameRepository {
  loadByUsername: (username: string) => Promise<UserModel>
}
