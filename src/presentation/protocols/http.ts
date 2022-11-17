export interface HttpRequest {
  params?: any
  body?: any
  userId?: string
  headers?: any
}

export interface HttpResponse {
  body: any
  statusCode: any
}
