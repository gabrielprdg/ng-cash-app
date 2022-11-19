import { InvalidParamError } from '../../presentation/errors/invalid-param-error'
import { Validation } from '../../presentation/protocols/validation'

export class UsernameValidation implements Validation {
  private readonly username: string

  constructor (username: string) {
    this.username = username
  }

  validate (input: any): Error {
    const username = input[this.username]
    if (username.legth < 3) {
      return new InvalidParamError(`${this.username} have less than 3 characters`)
    }
  }
}
