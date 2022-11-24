export interface SelfTransactionVerify {
  verify: (username: string, userId: string) => Promise<boolean>
}
