'use strict'

const User = use('App/Models/User')
const Professor = use('App/Models/Professor')


class UserController {
  async store({ request }) {
    const dados = request.only(['username', 'email', 'password'])

    const user = await User.create(dados)

    return user
  }

  async index ({ request, response, view }) {

    const professor = await Professor.all()

    return professor

  }

}

module.exports = UserController
