export interface DeleteAccountRepository {
  deleteById: (id: string) => Promise<void>
}
