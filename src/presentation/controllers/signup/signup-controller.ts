import { AddUser } from '../../../domain/usecases/user/add-user'
import { Authentication } from '../../../domain/usecases/user/authentication'
import { UsernameInUseError } from '../../../presentation/errors/username-in-use-error'
import { badRequest, forbidden, ok, serverError } from '../../../presentation/helpers/https/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../../presentation/protocols'
import { Validation } from '../../../presentation/protocols/validation'

export class SignUpController implements Controller {
  private readonly addUser: AddUser
  private readonly authentication: Authentication
  private readonly validation: Validation

  constructor (addUser: AddUser, authentication: Authentication, validation: Validation) {
    this.addUser = addUser
    this.authentication = authentication
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error != null) {
        return badRequest(error)
      }

      const {
        username,
        password
      } = httpRequest.body

      const user = await this.addUser.add({
        username,
        password
      })

      if (!user) {
        return forbidden(new UsernameInUseError())
      }

      // after registration, login is performed
      const accessToken = await this.authentication.auth({
        username,
        password
      })

      return ok({ accessToken })
    } catch (err) {
      return serverError(err)
    }
  }
}
