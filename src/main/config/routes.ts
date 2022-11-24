import { Router, Express } from 'express'
import transactionRoutes from '../routes/transaction-routes'
import loginRoutes from '../routes/login-routes'

export default (app: Express): void => {
    const router = Router()
    app.use('/', router)

    loginRoutes(router)
    transactionRoutes(router)
}
