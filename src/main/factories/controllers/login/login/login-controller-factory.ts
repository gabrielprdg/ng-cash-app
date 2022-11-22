import { LoginController } from '../../../../../presentation/controllers/login/login-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeLoginValidation } from './login-validation-factory'
import { makeDbAuthentication } from '../../../usecases/user/authentication/authentication-factory'

export const makeLoginController = (): Controller => {
  return new LoginController(makeDbAuthentication(), makeLoginValidation())
}