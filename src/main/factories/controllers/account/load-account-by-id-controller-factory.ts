import { LoadAccountByIdController } from '../../../../presentation/controllers/account/load-account-by-id/load-account-by-id-controller'
import { makeDbLoadAccountById } from '../../../../main/factories/usecases/account/load-account-by-id/load-account-by-id-factory'
import { Controller } from '../../../../presentation/protocols'

export const makeLoadAccountByIdController = (): Controller => {
  return new LoadAccountByIdController(makeDbLoadAccountById())
}
