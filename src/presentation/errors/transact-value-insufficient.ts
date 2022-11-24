export class InsufficientValueError extends Error {
  constructor () {
    super('The transact value is insufficient')
    this.name = 'InsufficientValueError'
  }
}
