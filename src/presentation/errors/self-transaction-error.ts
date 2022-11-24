export class SelfTransactionError extends Error {
  constructor () {
    super('it is impossible to make a transfer to yourself.')
    this.name = 'SelfTransactionError'
  }
}
