import { AccountModel } from '../../../../domain/models/account'

export interface LoadAccountByUsernameRepository {
  loadByUsername: (username: string) => Promise<AccountModel>
}
