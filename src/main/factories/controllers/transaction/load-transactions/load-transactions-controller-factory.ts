import { LoadTransactionsController } from '../../../../../presentation/controllers/transaction/load-transactions-by-account/load-transactions-by-account-controller'
import { makeLoadTransactions } from '../../../../../main/factories/usecases/transaction/load-transactions/load-transaction-factory'
import { Controller } from '../../../../../presentation/protocols'

export const makeLoadTransactionsController = (): Controller => {
  return new LoadTransactionsController(makeLoadTransactions())
}
