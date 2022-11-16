import 'reflect-metadata'
import express, { json } from 'express'
import routes from './config/routes'

import { nextTick } from 'process'

const app = express()
app.use(json())

routes(app)

app.listen(8083,()=>console.log('Server started at port 8083'))
