import { Controller, HttpRequest, HttpResponse } from 'presentation/protocols'

export class SignUpController implements Controller {
  private readonly addUser: AddUser

  constructor (addUser: AddUser) {
    this.addUser = addUser
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

    } catch (err) {
      return serverError(err)
    }
  }
}
