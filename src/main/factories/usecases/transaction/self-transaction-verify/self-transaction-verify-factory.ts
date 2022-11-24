import { DbSelfTransactionVerify } from '../../../../../data/usecases/transaction/self-transaction-verify/db-self-transaction-verify'
import { SelfTransactionVerify } from '../../../../../domain/usecases/transaction/self-transaction-verify'
import { AccountTypeOrmRepository } from '../../../../../infra/db/typeorm/repository/account/account-typeorm-repository'
import { UserTypeOrmRepository } from '../../../../../infra/db/typeorm/repository/user/user-typeorm-repository'

export const makeSelfTransactionVerify = (): SelfTransactionVerify => {
  const userTypeOrmRepo = new UserTypeOrmRepository()
  const accountTypeOrmRepo = new AccountTypeOrmRepository()
  return new DbSelfTransactionVerify(userTypeOrmRepo, accountTypeOrmRepo, userTypeOrmRepo)
}
