import { LoadTransactionsByAccount } from '../../../../domain/usecases/transaction/load-transactions-by-account'
import { badRequest, ok, serverError } from 'presentation/helpers/https/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../../protocols'

export class LoadTransactionsByAccountControllers implements Controller {
  private readonly loadTransactionsByAccount: LoadTransactionsByAccount
  private readonly validation: Validation

  constructor (loadTransactionsByAccount: LoadTransactionsByAccount, validation: Validation) {
    this.loadTransactionsByAccount = loadTransactionsByAccount
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)

      if (error) {
        return badRequest(error)
      }

      const { id } = httpRequest.params

      const transactions = await this.loadTransactionsByAccount.loadByAccount(id)

      return ok({ transactions })
    } catch (err) {
      return serverError(err)
    }
  }
}
