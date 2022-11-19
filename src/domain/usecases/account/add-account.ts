export interface AddAccount {
  add: ({ balance: number }) => Promise<{ id: string }>
}
