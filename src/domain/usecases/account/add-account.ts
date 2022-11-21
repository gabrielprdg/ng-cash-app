export type AddAccountParams = {
  balance: number
}

export interface AddAccount {
  add: (accountData: AddAccountParams) => Promise<string>
}
