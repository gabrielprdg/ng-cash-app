export interface DeleteAccount {
  deleteById: (id: string) => Promise<void>
}
