import { AccountTypeOrmRepository } from '../../../../../infra/db/typeorm/repository/account/account-typeorm-repository'
import { DbAddTransaction } from '../../../../../data/usecases/transaction/add-transaction/db-add-transaction'
import { AddTransaction } from '../../../../../domain/usecases/transaction/add-transaction'
import { JwtAdapter } from '../../../../../infra/criptography/jwt-adapter/jwt-adapter'
import { TransactionTypeOrmRepository } from '../../../../../infra/db/typeorm/repository/transaction/transaction-typeorm-repository'
import { UserTypeOrmRepository } from '../../../../../infra/db/typeorm/repository/user/user-typeorm-repository'

export const makeAddTransaction = (): AddTransaction => {
  const userTypeOrmRepo = new UserTypeOrmRepository()
  const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET)
  const transactionTypeOrmRepo = new TransactionTypeOrmRepository()
  const accountTypeOrmRepo = new AccountTypeOrmRepository()
  return new DbAddTransaction(transactionTypeOrmRepo, userTypeOrmRepo, accountTypeOrmRepo, userTypeOrmRepo, accountTypeOrmRepo, jwtAdapter)
}
