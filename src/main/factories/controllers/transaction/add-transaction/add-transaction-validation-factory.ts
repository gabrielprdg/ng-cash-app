import { Validation } from '../../../../../presentation/protocols'
import {
  RequiredFieldsValidation, ValidationComposite
} from '../../../../../validation/validators'

export const makeAddTransactionValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['username', 'value']) {
    validations.push(new RequiredFieldsValidation(field))
  }

  return new ValidationComposite(validations)
}
