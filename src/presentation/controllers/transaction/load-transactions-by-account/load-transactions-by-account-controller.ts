import { ok, serverError } from '../../../../presentation/helpers/https/http-helper'
import { LoadTransactionsByAccount } from '../../../../domain/usecases/transaction/load-transactions-by-account'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class LoadTransactionsController implements Controller {
  private readonly loadTransactionsByAccount: LoadTransactionsByAccount

  constructor (loadTransactionsByAccount: LoadTransactionsByAccount) {
    this.loadTransactionsByAccount = loadTransactionsByAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      console.log('ela', id)
      const transactions = await this.loadTransactionsByAccount.loadByAccount(id)

      return ok({ transactions })
    } catch (err) {
      return serverError(err)
    }
  }
}
