import { AddTransaction } from '../../../../domain/usecases/transaction/add-transaction'
import { badRequest, noContent, serverError } from '../../../../presentation/helpers/https/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation
} from '../../../../presentation/protocols'

export class AddTransactionController implements Controller {
  private readonly addTransaction: AddTransaction
  private readonly validation: Validation

  constructor (addTransaction: AddTransaction, validation: Validation) {
    this.addTransaction = addTransaction
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)

      if (error) {
        return badRequest(error)
      }

      const {
        username,
        value
      } = httpRequest.body

      const accessToken = httpRequest.headers?.['x-access-token']

      await this.addTransaction.add({
        username,
        value,
        accessToken
      })

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}
