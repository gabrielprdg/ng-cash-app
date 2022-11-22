
export type AddTransactionRepoParams = {
  debitedAccountId: string
  creditedAccountId: string
  value: number
}

export interface AddTransactionRepository {
  add: (transactionData: AddTransactionRepoParams) => Promise<void>
}
