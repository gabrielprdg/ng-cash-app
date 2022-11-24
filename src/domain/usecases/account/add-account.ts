import { AccountModel } from '../../../domain/models/account'

export type AddAccountParams = {
  balance: number
}

export interface AddAccount {
  add: (accountData: AddAccountParams) => Promise<AccountModel>
}
