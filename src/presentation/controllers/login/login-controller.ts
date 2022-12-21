import { LoadUserByToken } from '../../../domain/usecases/user/load-user-by-token'
import { Authentication } from '../../../domain/usecases/user/authentication'
import { badRequest, ok, serverError, unauthorized } from '../../../presentation/helpers/https/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class LoginController implements Controller {
  private readonly authentication: Authentication
  private readonly validation: Validation
  private readonly loadUserByToken: LoadUserByToken

  constructor (
    authentication: Authentication,
    validation: Validation,
    loadUserByToken: LoadUserByToken
  ) {
    this.authentication = authentication
    this.validation = validation
    this.loadUserByToken = loadUserByToken
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { username, password } = httpRequest.body

      const accessToken = await this.authentication.auth({
        username,
        password
      })

      if (!accessToken) {
        return unauthorized()
      }

      const user = await this.loadUserByToken.loadByToken(accessToken)

      return ok({ accessToken, user })
    } catch (err) {
      return serverError(err)
    }
  }
}
