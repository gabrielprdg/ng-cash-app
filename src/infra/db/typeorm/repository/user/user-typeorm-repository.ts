import { UserModel } from 'domain/models/user'
import { AddUser, AddUserParams } from 'domain/usecases/user/add-user'
import { InsertResult } from 'typeorm'
import { TypeOrmUser } from '../../entity/typeorm-user'

export class UserTypeOrmRepository implements AddUser {
  async add (userData: AddUserParams): Promise<UserModel> {
    const insertResult: InsertResult = await AppDataSource.getInstance()
      .createQueryBuilder()
      .insert()
      .into(TypeOrmUser)
      .values(
        [
            {
            customer: { document: data.customer_document },
            note: data.note
            }
        ]
      )
      .returning('id')
      .execute()
    return insertResult.identifiers[0].id
  }
}
