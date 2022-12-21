import { LoadAccountById } from '../../../../domain/usecases/account/load-account-by-id'
import { ok, serverError } from '../../../../presentation/helpers/https/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class LoadAccountByIdController implements Controller {
  private readonly loadAccountById: LoadAccountById

  constructor (
    loadAccountById: LoadAccountById
  ) {
    this.loadAccountById = loadAccountById
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      const account = await this.loadAccountById.loadById(id)

      return ok({ account })
    } catch (err) {
      return serverError(err)
    }
  }
}
