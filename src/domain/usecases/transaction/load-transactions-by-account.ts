import { TransactionModel } from '../../../domain/models/transaction'

export type LoadTransactionsByAccountParams = {
  debitedAccountId
  creditedAccountId
  value
}

export interface LoadTransactionsByAccount {
  loadByAccount: (id: string) => Promise<TransactionModel[]>
}
