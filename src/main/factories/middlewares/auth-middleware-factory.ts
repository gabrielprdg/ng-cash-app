import { JwtAdapter } from '../../../infra/criptography/jwt-adapter/jwt-adapter'
import { AuthMiddleware } from '../../../presentation/middlewares/auth-middleware'
import { Middleware } from '../../../presentation/protocols'

export const makeAuthMiddleware = (role?: string): Middleware => {
  const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET)
  return new AuthMiddleware(jwtAdapter)
}
