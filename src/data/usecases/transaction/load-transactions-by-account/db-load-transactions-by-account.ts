import { LoadTransactionsByAccountRepository } from 'data/protocols/db/transaction/load-transaction-by-account'
import { TransactionModel } from 'domain/models/transaction'
import { LoadTransactionsByAccount } from 'domain/usecases/transaction/load-transactions-by-account'

export class DbLoadTransactionsByAccount implements LoadTransactionsByAccount {
  private readonly loadTransactionsByAccountRepository: LoadTransactionsByAccountRepository

  constructor (loadTransactionsByAccountRepository: LoadTransactionsByAccountRepository) {
    this.loadTransactionsByAccountRepository = loadTransactionsByAccountRepository
  }

  async loadByAccount (id: string): Promise<TransactionModel[]> {
    const transactions = await this.loadTransactionsByAccountRepository.loadByAccount(id)
    return transactions
  }
}
