import { DbLoadUserByToken } from 'data/usecases/user/load-user-by-token/db-load-user-by-token'
import { LoadUserByToken } from 'domain/usecases/user/load-user-by-token'
import { JwtAdapter } from 'infra/criptography/jwt-adapter/jwt-adapter'
import { UserTypeOrmRepository } from 'infra/db/typeorm/repository/user/user-typeorm-repository'

export const makeDbLoadUserByToken = (): LoadUserByToken => {
  const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET)
  const userTypeOrmRepository = new UserTypeOrmRepository()
  return new DbLoadUserByToken(jwtAdapter, userTypeOrmRepository)
}
