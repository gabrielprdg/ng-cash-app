import { TypeOrmUser } from '../../entity/typeorm-user'

export class Mapper {
  public static toDomainEntity (typeOrmUser: TypeOrmUser): any {
    const result = {
      id: typeOrmUser.id,
      username: typeOrmUser.username,
      password: typeOrmUser.password,
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      accountId: typeOrmUser.account
    }

    return result
  }
}
