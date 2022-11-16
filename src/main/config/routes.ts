import { Router, Express } from "express"

export default (app: Express): void => {
    const router = Router()
    app.use('/',router)

}