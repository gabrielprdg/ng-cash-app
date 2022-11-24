import { DbDeleteAccount } from '../../../../../data/usecases/account/delete-account/db-delete-account'
import { DeleteAccount } from '../../../../../domain/usecases/account/delete-account'
import { AccountTypeOrmRepository } from '../../../../../infra/db/typeorm/repository/account/account-typeorm-repository'

export const makeDeleteAccount = (): DeleteAccount => {
  const accountTypeOrmRepo = new AccountTypeOrmRepository()
  return new DbDeleteAccount(accountTypeOrmRepo)
}
