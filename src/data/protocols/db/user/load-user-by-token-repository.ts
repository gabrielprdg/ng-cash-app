import { UserModel } from '../../../../domain/models/user'

export interface LoadUserByTokenRepository {
  loadByToken: (token: string, role?: string) => Promise<UserModel>
}
