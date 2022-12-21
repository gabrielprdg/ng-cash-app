import { AccountModel } from '../../../domain/models/account'

export interface LoadAccountById {
  loadById: (id: string) => Promise<AccountModel>
}
