import { AccountTypeOrmRepository } from '../../../../../infra/db/typeorm/repository/account/account-typeorm-repository'
import { DbAddAccount } from '../../../../../data/usecases/account/add-account/db-add-account'
import { AddAccount } from '../../../../../domain/usecases/account/add-account'

export const makeAddAccount = (): AddAccount => {
  const accountTypeOrmRepo = new AccountTypeOrmRepository()
  return new DbAddAccount(accountTypeOrmRepo)
}
