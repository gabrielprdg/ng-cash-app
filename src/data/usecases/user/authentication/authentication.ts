import { Encrypter } from '../../../../data/protocols/criptography/encrypter'
import { HashComparer } from '../../../../data/protocols/criptography/hash-comparer'
import { LoadUserByUserNameRepository } from '../../../../data/protocols/db/user/load-user-by-username'
import { UpdateAccessTokenRepository } from '../../../../data/protocols/db/user/update-access-token-repository'
import { Authentication, AuthenticationParams } from '../../../../domain/usecases/user/authentication'

export class DbAthentication implements Authentication {
  private readonly loadUserByUserNameRepository: LoadUserByUserNameRepository
  private readonly hashComparer: HashComparer
  private readonly encrypter: Encrypter
  private readonly updateAccessTokenRepository: UpdateAccessTokenRepository

  constructor (
    loadUserByUserNameRepository: LoadUserByUserNameRepository,
    hashComparer: HashComparer,
    encrypter: Encrypter,
    updateAccessTokenRepository: UpdateAccessTokenRepository
  ) {
    this.loadUserByUserNameRepository = loadUserByUserNameRepository
    this.hashComparer = hashComparer
    this.encrypter = encrypter
    this.updateAccessTokenRepository = updateAccessTokenRepository
  }

  async auth (authentication: AuthenticationParams): Promise<string> {
    const user = await this.loadUserByUserNameRepository.loadByUsername(authentication.username)
    console.log('tometi', user)
    if (user) {
      const isValid = await this.hashComparer.compare(authentication.password, user.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(user.id)
        return accessToken
      }
    }
    return null
  }
}
