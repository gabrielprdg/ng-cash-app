import express, { json } from 'express'
import { AppDataSource } from '../infra/db/typeorm/helper/app-data-source'
import 'reflect-metadata'
import routes from './config/routes'

import * as dotenv from 'dotenv'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors')
dotenv.config()

const app = express()
app.use(cors())
app.use(json())

routes(app)

console.log(process.env.PORT, '4rd')
AppDataSource
  .getInstance()
  .initialize()
  .then(() => app.listen(process.env.PORT, () => console.log(`Server started at port ${process.env.PORT}`)))
  .catch(err => console.log(err))
