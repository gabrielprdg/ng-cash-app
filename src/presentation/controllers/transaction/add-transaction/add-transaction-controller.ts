import { InsufficientValueError } from '../../../../presentation/errors/transact-value-insufficient'
import { AddTransaction } from '../../../../domain/usecases/transaction/add-transaction'
import { badRequest, forbidden, noContent, serverError } from '../../../../presentation/helpers/https/http-helper'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation
} from '../../../../presentation/protocols'
import { SelfTransactionVerify } from '../../../../domain/usecases/transaction/self-transaction-verify'
import { SelfTransactionError } from '../../../../presentation/errors/self-transaction-error'

export class AddTransactionController implements Controller {
  private readonly addTransaction: AddTransaction
  private readonly selfTransactionVerify: SelfTransactionVerify
  private readonly validation: Validation

  constructor (
    addTransaction: AddTransaction,
    selfTransactionVerify: SelfTransactionVerify,
    validation: Validation
  ) {
    this.addTransaction = addTransaction
    this.selfTransactionVerify = selfTransactionVerify
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

      console.log(httpRequest)
      const userId = httpRequest.userId

      const isSelfTransaction = await this.selfTransactionVerify.verify(username, userId)

      if (isSelfTransaction) {
        return forbidden(new SelfTransactionError())
      }

      const transactId = await this.addTransaction.add({
        username,
        value,
        userId
      })

      console.log(transactId, 'rd')

      if (!transactId) {
        return forbidden(new InsufficientValueError())
      }

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}
