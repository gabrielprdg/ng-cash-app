import express, { json } from 'express'
import { AppDataSource } from 'infra/db/typeorm/helper/app-data-source'
import 'reflect-metadata'
import routes from './config/routes'

const app = express()
app.use(json())

routes(app)

AppDataSource
  .getInstance()
  .initialize()
  .then(() => app.listen(process.env.PORT, () => console.log(`Server started at port ${process.env.PORT}`)))
  .catch(err => console.log(err))
