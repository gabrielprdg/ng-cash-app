import { DbAthentication } from '../../../../../data/usecases/user/authentication/authentication'
import { Authentication } from '../../../../../domain/usecases/user/authentication'
import { BcryptAdapter } from '../../../../../infra/criptography/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '../../../../../infra/criptography/jwt-adapter/jwt-adapter'
import { UserTypeOrmRepository } from '../../../../../infra/db/typeorm/repository/user/user-typeorm-repository'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET)
  const accountTypeOrmRepository = new UserTypeOrmRepository()
  return new DbAthentication(accountTypeOrmRepository, bcryptAdapter, jwtAdapter, accountTypeOrmRepository)
}
