'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    const dados = request.only(['username', 'email', 'password'])

    const user = await User.create(dados)

    return user
  }
}

module.exports = UserController
