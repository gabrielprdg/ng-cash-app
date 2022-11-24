import { Decrypter } from 'data/protocols/criptography/decrypter'
import { AccessDeniedError } from '../../presentation/errors/access-denied-error'
import { forbidden, ok, serverError } from '../../presentation/helpers/https/http-helper'
import { HttpRequest, HttpResponse } from '../../presentation/protocols'
import { Middleware } from '../../presentation/protocols/middleware'

export class AuthMiddleware implements Middleware {
  private readonly decrypter: Decrypter

  constructor (decrypter: Decrypter) {
    this.decrypter = decrypter
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      console.log(accessToken, 'rc')
      if (accessToken) {
          const user = await this.decrypter.decrypt(accessToken)

          const userId = user.id
          console.log('evok', user)
          if (user) {
            return ok({ userId })
          }
      }
      return forbidden(new AccessDeniedError())
    } catch (err) {
      return serverError(err)
    }
  }
}
