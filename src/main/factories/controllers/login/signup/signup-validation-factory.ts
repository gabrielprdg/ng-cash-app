import { PasswordValidation } from '../../../../../validation/validators/password-validation'
import { Validation } from '../../../../../presentation/protocols/validation'
import { RequiredFieldsValidation } from '../../../../../validation/validators/required-fields-validation'
import { UsernameValidation } from '../../../../../validation/validators/username-validation'
import { ValidationComposite } from '../../../../../validation/validators/validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['username', 'password']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  validations.push(new UsernameValidation('username'))
  validations.push(new PasswordValidation('password'))
  return new ValidationComposite(validations)
}
