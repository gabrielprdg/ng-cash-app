import { makeAddTransaction } from '../../../usecases/transaction/add-transaction/add-transaction-factory'
import { Controller } from '../../../../../presentation/protocols'
import { AddTransactionController } from '../../../../../presentation/controllers/transaction/add-transaction/add-transaction-controller'
import { makeAddTransactionValidation } from './add-transaction-validation-factory'
import { makeSelfTransactionVerify } from '../../../../../main/factories/usecases/transaction/self-transaction-verify/self-transaction-verify-factory'

export const makeAddTransactionController = (): Controller => {
  return new AddTransactionController(makeAddTransaction(), makeSelfTransactionVerify(), makeAddTransactionValidation())
}
