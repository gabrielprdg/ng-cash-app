import { AccessDeniedError } from '../../presentation/errors/access-denied-error'
import { forbidden, ok, serverError } from '../../presentation/helpers/https/http-helper'
import { HttpRequest, HttpResponse } from '../../presentation/protocols'
import { Middleware } from '../../presentation/protocols/middleware'

export class AuthMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (accessToken) {
          return ok()
      }
      return forbidden(new AccessDeniedError())
    } catch (err) {
      return serverError(err)
    }
  }
}
