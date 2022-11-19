import { UserModel } from 'domain/models/user'
import { TypeOrmUser } from '../../entity/typeorm-user'

export class Mapper {
  public static toDomainEntity (typeOrmUser: TypeOrmUser): UserModel {
    const result: UserModel = {
      id: typeOrmUser.id,
      username: typeOrmUser.username,
      password: typeOrmUser.password,
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      accountId: (typeOrmUser.accountId).toString()
    }

    return result
  }
}
