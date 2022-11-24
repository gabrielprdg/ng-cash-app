
export class Mapper {
  public static toDomainEntity (typeOrmUser: any): any {
    const result = {
      id: typeOrmUser.id,
      username: typeOrmUser.username,
      password: typeOrmUser.password,
      accountId: typeOrmUser.accountId
    }

    return result
  }
}
