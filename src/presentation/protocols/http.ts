export interface HttpRequest {
  params?:any
  body?:any
  userId?:string
}

export interface HttpResponse {
  body: any
  statusCode: any
}