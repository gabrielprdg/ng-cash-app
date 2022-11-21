import { AddUserParams } from '../../../../domain/usecases/user/add-user'

export interface AddUserRepository {
  add: (userData: AddUserParams) => Promise<string>
}
