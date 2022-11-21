import { InvalidParamError } from '../../presentation/errors/invalid-param-error'
import { Validation } from '../../presentation/protocols/validation'

export class PasswordValidation implements Validation {
  private readonly password: string

  constructor (password: string) {
    this.password = password
  }

  hasUpper (value: string): Boolean {
    return /[A-Z]/.test(value)
  }

  isNumeric (value: string): Boolean {
    return /[0-9]/.test(value)
  }

  validate (input: any): Error {
    const password = input[this.password]
    console.log('r', password)
    if (password.length < 8 || !this.isNumeric(password) || !this.hasUpper(password)) {
      return new InvalidParamError(`${this.password}`)
    }
  }
}
