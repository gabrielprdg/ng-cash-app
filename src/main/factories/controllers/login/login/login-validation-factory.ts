import { RequiredFieldsValidation, ValidationComposite } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols/validation'
import { UsernameValidation } from '../../../../../validation/validators/username-validation'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['username', 'password']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  validations.push(new UsernameValidation('username'))
  return new ValidationComposite(validations)
}
