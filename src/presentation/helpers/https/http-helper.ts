import { UnauthorizedError } from '../../../presentation/errors/unauthorized-error'
import { ServerError } from '../../errors/server-error'
import { HttpResponse } from '../../protocols/http'

export const serverError = (error: Error): HttpResponse => ({
  body: new ServerError(error.stack),
  statusCode: 500
})

export const ok = (data?: any): HttpResponse => ({
  body: data,
  statusCode: 200
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const badRequest = (error: Error): HttpResponse => ({
  body: error,
  statusCode: 400
})

export const forbidden = (error: Error): HttpResponse => ({
  body: error,
  statusCode: 403
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})
