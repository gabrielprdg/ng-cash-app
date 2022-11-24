
export type AddTransactionRepoParams = {
  debitedAccount: any
  creditedAccount: any
  value: number
}

export interface AddTransactionRepository {
  add: (transactionData: AddTransactionRepoParams) => Promise<string>
}
