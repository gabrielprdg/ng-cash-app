import { AddTransactionRepoParams, AddTransactionRepository } from '../../../../../data/protocols/db/transaction/add-transaction-repository'
import { TypeOrmTransaction } from '../../entity/typeorm-transaction'
import { AppDataSource } from '../../helper/app-data-source'

export class TransactionTypeOrmRepository implements AddTransactionRepository {
  async add (transactionData: AddTransactionRepoParams): Promise<void> {
  await AppDataSource.getInstance()
    .createQueryBuilder()
    .insert()
    .into(TypeOrmTransaction)
    .values([{
      debitedAccountId: () => transactionData.debitedAccountId,
      creditedAccountId: () => transactionData.creditedAccountId,
      value: transactionData.value
    }])
    .execute()
  }
}
