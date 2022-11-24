import { DbLoadTransactionsByAccount } from '../../../../../data/usecases/transaction/load-transactions-by-account/db-load-transactions-by-account'
import { LoadTransactionsByAccount } from '../../../../../domain/usecases/transaction/load-transactions-by-account'
import { TransactionTypeOrmRepository } from '../../../../../infra/db/typeorm/repository/transaction/transaction-typeorm-repository'

export const makeLoadTransactions = (): LoadTransactionsByAccount => {
  const transactionTypeOrmRepo = new TransactionTypeOrmRepository()
  return new DbLoadTransactionsByAccount(transactionTypeOrmRepo)
}
