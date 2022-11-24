import { AddTransactionRepoParams, AddTransactionRepository } from '../../../../../data/protocols/db/transaction/add-transaction-repository'
import { LoadTransactionsByAccount } from '../../../../../domain/usecases/transaction/load-transactions-by-account'
import { TypeOrmTransaction } from '../../entity/typeorm-transaction'
import { AppDataSource } from '../../helper/app-data-source'

export class TransactionTypeOrmRepository implements AddTransactionRepository, LoadTransactionsByAccount {
  async add (transactionData: AddTransactionRepoParams): Promise<string> {
    console.log('o console', transactionData)
    const transaction = new TypeOrmTransaction()
    transaction.debitedAccount = transactionData.debitedAccount
    transaction.creditedAccount = transactionData.creditedAccount
    transaction.value = transactionData.value

    const result = await AppDataSource.getInstance()
      .getRepository(TypeOrmTransaction)
      .save(transaction)
    return result.id
  }

  async loadByAccount (id: string): Promise<any> {
    const result = await AppDataSource.getInstance()
    .getRepository(TypeOrmTransaction)
    .createQueryBuilder('transaction')
    .leftJoinAndSelect('transaction.debitedAccount', 'debitedAccountId')
    .leftJoinAndSelect('transaction.creditedAccount', 'creditedAccountId')
    .where('transaction.debitedAccount = :debitedAccount', { debitedAccount: id })
    .orWhere('transaction.creditedAccount = :creditedAccount', { creditedAccount: id })
    .getMany()

    return result
  }
}
