export interface UpdateBalanceRepository {
  update: (id: string, newBalance: number) => Promise<void>
}
