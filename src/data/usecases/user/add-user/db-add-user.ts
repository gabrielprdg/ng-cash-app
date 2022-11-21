import { UserModel } from '../../../../domain/models/user'
import { AddUserRepository } from '../../../../data/protocols/db/user/add-user-repository'
import { LoadUserByUserNameRepository } from '../../../../data/protocols/db/user/load-user-by-username'
import { AddUser, AddUserParams } from '../../../../domain/usecases/user/add-user'
import { Hasher } from '../../../protocols/criptography/hasher'

export class DbAddUser implements AddUser {
  private readonly hasher: Hasher
  private readonly addUserRepository: AddUserRepository
  private readonly loadUserByUserNameRepository: LoadUserByUserNameRepository

  constructor (hasher: Hasher, addUserRepository: AddUserRepository, loadUserByUserNameRepository: LoadUserByUserNameRepository) {
    this.hasher = hasher
    this.addUserRepository = addUserRepository
    this.loadUserByUserNameRepository = loadUserByUserNameRepository
  }

  async add (userData: AddUserParams): Promise<UserModel> {
    console.log('user', userData)
    const loadByUsername = await this.loadUserByUserNameRepository.loadByUsername(userData.username)
    console.log('loadbyus', loadByUsername)
    if (!loadByUsername) {
      const hashedPassword = await this.hasher.hash(userData.password)
      /*
        Object.assign -> create a new object and new properties called SOURCES
        are added and if the next SOURCE has a property equal to the previous SOURCE,
        this old property is changed
      */

      const user = await this.addUserRepository.add(Object.assign({},
        userData,
        { password: hashedPassword }
      ))

      console.log('ed', user)

      return user
    }
    return null
  }
}
