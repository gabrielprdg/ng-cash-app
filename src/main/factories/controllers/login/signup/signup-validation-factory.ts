import { Validation } from 'presentation/protocols/validation'
import { RequiredFieldsValidation } from 'validation/validators/required-fields-validation'
import { UsernameValidation } from 'validation/validators/username-validation'
import { ValidationComposite } from 'validation/validators/validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  validations.push(new UsernameValidation('username'))
  return new ValidationComposite(validations)
}
