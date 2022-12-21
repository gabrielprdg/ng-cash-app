import { LoadUserByIdRepository } from '../../../../../data/protocols/db/user/load-user-by-id-repository'
import { LoadUserByTokenRepository } from '../../../../../data/protocols/db/user/load-user-by-token-repository'
import { LoadUserByUserNameRepository } from '../../../../../data/protocols/db/user/load-user-by-username'
import { UpdateAccessTokenRepository } from '../../../../../data/protocols/db/user/update-access-token-repository'
import { UserModel } from '../../../../../domain/models/user'
import { AddUser, AddUserParams } from '../../../../../domain/usecases/user/add-user'
import { TypeOrmUser } from '../../entity/typeorm-user'
import { AppDataSource } from '../../helper/app-data-source'

export class UserTypeOrmRepository implements AddUser, LoadUserByUserNameRepository, LoadUserByTokenRepository, UpdateAccessTokenRepository, LoadUserByIdRepository {
  async add (userData: AddUserParams): Promise<UserModel> {
    const user = new TypeOrmUser()
    user.username = userData.username
    user.password = userData.password
    user.account = userData.account

    const result = await AppDataSource.getInstance()
        .getRepository(TypeOrmUser)
        .save(user)

    return result as any
  }

  async loadByUsername (username: string): Promise<any> {
    const result = await AppDataSource.getInstance()
    .getRepository(TypeOrmUser)
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.account', 'accountId')
    .where('user.username = :username', { username })
    .getOne()

    return result
  }

  async loadByToken (token: string): Promise<UserModel> {
    let user: UserModel | null

    const result = await AppDataSource.getInstance()
      .getRepository(TypeOrmUser)
      .createQueryBuilder('user')
      .where({ accessToken: token })
      .getOne()

    if (result) user = result

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

  async loadById (id: string): Promise<any> {
    // let user: any | null

    const result = await AppDataSource.getInstance()
    .getRepository(TypeOrmUser)
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.account', 'accountId')
    .where('user.id = :id', { id })
    .getOne()

    return result
  }
}
