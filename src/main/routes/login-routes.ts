import { Router } from 'express'
import { makeSignUpController } from '../../main/factories/controllers/login/signup/signup-controller-factory'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeLoginController } from '../../main/factories/controllers/login/login/login-controller-factory'

export default (router: Router): void => {
  router.post('/login', adaptRoute(makeLoginController()))
  router.post('/signup', adaptRoute(makeSignUpController()))
}
