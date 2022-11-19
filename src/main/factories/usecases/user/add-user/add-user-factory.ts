import { DbAddUser } from 'data/usecases/user/add-user/db-add-user'
import { AddUser } from 'domain/usecases/user/add-user'
import { BcryptAdapter } from 'infra/criptography/bcrypt-adapter/bcrypt-adapter'
import { UserTypeOrmRepository } from 'infra/db/typeorm/repository/user/user-typeorm-repository'

export const makeAddUser = (): AddUser => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const userTypeOrmRepo = new UserTypeOrmRepository()
  return new DbAddUser(bcryptAdapter, userTypeOrmRepo, userTypeOrmRepo)
}
