import { DbLoadAccountById } from '../../../../../data/usecases/account/load-account-by-id/db-load-account-by-id'
import { LoadAccountById } from '../../../../../domain/usecases/account/load-account-by-id'
import { AccountTypeOrmRepository } from '../../../../../infra/db/typeorm/repository/account/account-typeorm-repository'

export const makeDbLoadAccountById = (): LoadAccountById => {
  const accountTypeOrmRepo = new AccountTypeOrmRepository()
  return new DbLoadAccountById(accountTypeOrmRepo)
}
