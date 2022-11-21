import { makeAddAccount } from '../../../../../main/factories/usecases/account/add-account/add-account-factory'
import { makeAddUser } from '../../../../../main/factories/usecases/user/add-user/add-user-factory'
import { makeDbAuthentication } from '../../../../../main/factories/usecases/user/authentication/authentication-factory'
import { SignUpController } from '../../../../../presentation/controllers/signup/signup-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'

export const makeSignUpController = (): Controller => {
  return new SignUpController(makeAddUser(), makeAddAccount(), makeDbAuthentication(), makeSignUpValidation())
}
