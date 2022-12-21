import { Router } from 'express'
import { makeLoadAccountByIdController } from '../../main/factories/controllers/account/load-account-by-id-controller-factory'
import { adaptRoute } from '../../main/adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/account/:id', adaptRoute(makeLoadAccountByIdController()))
}
