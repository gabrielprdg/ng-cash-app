export type AddTransactionParams = {
  username: string
  value: number
  userId: string
}

export interface AddTransaction {
  add: (transactionData: AddTransactionParams) => Promise<string>
}
