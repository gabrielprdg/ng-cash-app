export class UsernameInUseError extends Error {
  constructor () {
    super('The username is already in use')
    this.name = 'UsernameInuseError'
  }
}
