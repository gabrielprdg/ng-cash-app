import { AddAccount } from '../../../domain/usecases/account/add-account'
import { AddUser } from '../../../domain/usecases/user/add-user'
import { Authentication } from '../../../domain/usecases/user/authentication'
import { UsernameInUseError } from '../../../presentation/errors/username-in-use-error'
import { badRequest, forbidden, ok, serverError } from '../../../presentation/helpers/https/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../../presentation/protocols'
import { Validation } from '../../../presentation/protocols/validation'

export class SignUpController implements Controller {
  private readonly addUser: AddUser
  private readonly addAccount: AddAccount
  private readonly authentication: Authentication
  private readonly validation: Validation

  constructor (
    addUser: AddUser,
    addAccount: AddAccount,
    authentication: Authentication,
    validation: Validation
  ) {
    this.addUser = addUser
    this.addAccount = addAccount
    this.authentication = authentication
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log('tome')
      const error = this.validation.validate(httpRequest.body)
      console.log(error)
      if (error) {
        return badRequest(error)
      }
      console.log('oi')

      const {
        username,
        password
      } = httpRequest.body

      // create account with 100 credits
      const accountId = await this.addAccount.add({ balance: 100 })
      console.log(accountId)
      const user = await this.addUser.add({
        username,
        password
      })

      console.log(user, 'drx')

      if (!user) {
        console.log('d3')
        return forbidden(new UsernameInUseError())
      }

      console.log('acff')

      // after registration, login is performed
      const accessToken = await this.authentication.auth({
        username,
        password
      })

      console.log('accesstoken', accessToken)

      return ok({ accessToken })
    } catch (err) {
      return serverError(err)
    }
  }
}
