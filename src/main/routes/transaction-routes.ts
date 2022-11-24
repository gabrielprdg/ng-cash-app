import { Router } from 'express'
import { makeAddTransactionController } from '../factories/controllers/transaction/add-transaction/add-transaction-controller-factory'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { auth } from '../../main/factories/middlewares/auth'
import { makeLoadTransactionsController } from '../../main/factories/controllers/transaction/load-transactions/load-transactions-controller-factory'

export default (router: Router): void => {
  router.post('/transaction', auth, adaptRoute(makeAddTransactionController()))
  router.get('/transaction/:id', auth, adaptRoute(makeLoadTransactionsController()))
}
