import { LoadUserByToken } from 'domain/usecases/user/load-user-by-token'
import { AccessDeniedError } from 'presentation/errors/access-denied-error'
import { forbidden, ok, serverError } from 'presentation/helpers/https/http-helper'
import { HttpRequest, HttpResponse } from 'presentation/protocols'
import { Middleware } from 'presentation/protocols/middleware'

export class AuthMiddleware implements Middleware {
  private readonly loadUserByToken: LoadUserByToken
  private readonly role: string
  constructor (loadUserByToken, role) {
    this.loadUserByToken = loadUserByToken
    this.role = role
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (accessToken) {
        const account = await this.loadUserByToken.load(accessToken, this.role)
        if (account) {
          return ok({ accountId: account.id })
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (err) {
      return serverError(err)
    }
  }
}
