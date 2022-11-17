import { BcryptAdapter } from 'infra/criptography/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from 'infra/criptography/jwt-adapter/jwt-adapter'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET)
  const accountTypeOrmRepository = new AccountTypeOrmRepository()
  return new DbAthentication(accountTypeOrmRepository, bcryptAdapter, jwtAdapter, accountTypeOrmRepository)
}
