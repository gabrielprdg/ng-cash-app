import { LoadUserByTokenRepository } from '../../../../../data/protocols/db/user/load-user-by-token-repository'
import { LoadUserByUserNameRepository } from '../../../../../data/protocols/db/user/load-user-by-username'
import { UpdateAccessTokenRepository } from '../../../../../data/protocols/db/user/update-access-token-repository'
import { UserModel } from '../../../../../domain/models/user'
import { AddUser, AddUserParams } from '../../../../../domain/usecases/user/add-user'
import { InsertResult } from 'typeorm'
import { TypeOrmUser } from '../../entity/typeorm-user'
import { AppDataSource } from '../../helper/app-data-source'
import { Mapper } from './mapper'

export class UserTypeOrmRepository implements AddUser, LoadUserByUserNameRepository, LoadUserByTokenRepository, UpdateAccessTokenRepository {
  async add (userData: AddUserParams): Promise<UserModel> {
    const insertResult: InsertResult = await AppDataSource.getInstance()
      .createQueryBuilder()
      .insert()
      .into(TypeOrmUser)
      .values(
        [
            {
              username: userData.username,
              password: userData.password
            }
        ]
      )
      .returning('id')
      .execute()
    return insertResult.raw
  }

  async loadByUsername (username: string): Promise<UserModel> {
    let user: UserModel | null

    const result = await AppDataSource.getInstance()
      .getRepository(TypeOrmUser)
      .findOneBy({ username })

      if (result) user = Mapper.toDomainEntity(result)

    return user
  }

  async loadByToken (token: string, role?: string): Promise<UserModel> {
    let user: UserModel | null

    const result = await AppDataSource.getInstance()
      .getRepository(TypeOrmUser)
      .createQueryBuilder('user')
      .where({ accessToken: token })
      .getOne()

    if (result) user = Mapper.toDomainEntity(result)

    return user
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    await AppDataSource.getInstance()
      .createQueryBuilder()
      .update(TypeOrmUser)
      .set({
        accessToken: token
      })
      .where({ id })
  }
}
