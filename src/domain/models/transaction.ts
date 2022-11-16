export interface TransactionModel {
  id: string
  debitedAccountId: string
  creditedAccountId: string
  value: number
  createdAt: Date
}