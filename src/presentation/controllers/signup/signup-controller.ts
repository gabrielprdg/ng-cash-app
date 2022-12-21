import { DeleteAccount } from '../../../domain/usecases/account/delete-account'
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
  private readonly deleteAccount: DeleteAccount
  private readonly authentication: Authentication
  private readonly validation: Validation

  constructor (
    addUser: AddUser,
    addAccount: AddAccount,
    deleteAccount: DeleteAccount,
    authentication: Authentication,
    validation: Validation
  ) {
    this.addUser = addUser
    this.addAccount = addAccount
    this.deleteAccount = deleteAccount
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
      const account = await this.addAccount.add({ balance: 100 })

      const user = await this.addUser.add({
        username,
        password,
        account
      })

      if (!user) {
        await this.deleteAccount.deleteById(account.id)
        return forbidden(new UsernameInUseError())
      }

      console.log(user, '4')

      console.log('acff')

      // after registration, login is performed
      const accessToken = await this.authentication.auth({
        username,
        password
      })

      console.log('accesstoken', accessToken)

      return ok({ accessToken, user })
    } catch (err) {
      return serverError(err)
    }
  }
}
