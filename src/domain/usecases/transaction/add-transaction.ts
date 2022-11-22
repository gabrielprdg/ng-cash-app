export type AddTransactionParams = {
  username: string
  value: number
  accessToken: string
}

export interface AddTransaction {
  add: (transactionData: AddTransactionParams) => Promise<void>
}
