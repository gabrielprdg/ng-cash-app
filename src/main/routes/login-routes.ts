import { Router } from 'express'
import { auth } from '../../main/factories/middlewares/auth'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeLoginController } from '../../main/factories/controllers/login/login/login-controller-factory'

export default (router: Router): void => {
  router.post('/login', auth, adaptRoute(makeLoginController()))
}
