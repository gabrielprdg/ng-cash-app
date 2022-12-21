import { LoginController } from '../../../../../presentation/controllers/login/login-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeLoginValidation } from './login-validation-factory'
import { makeDbAuthentication } from '../../../usecases/user/authentication/authentication-factory'
import { makeDbLoadUserByToken } from '../../../../../main/factories/usecases/user/load-user-by-token/load-user-by-token-factory.ts'

export const makeLoginController = (): Controller => {
  return new LoginController(makeDbAuthentication(), makeLoginValidation(), makeDbLoadUserByToken())
}
