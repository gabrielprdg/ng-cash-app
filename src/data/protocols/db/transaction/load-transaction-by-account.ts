import { TransactionModel } from '../../../../domain/models/transaction'

export interface LoadTransactionsByAccountRepository {
  loadByAccount: (id: string) => Promise<TransactionModel[]>
}
