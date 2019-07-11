'use strict'



const Route = use('Route')

Route.get('', 'UserController.index')
Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('forgot-password', 'ForgotPasswordController.store')

Route.group( () => {
  Route.resource('professors', 'ProfessorController').apiOnly()
  Route.resource('orientacoes', 'OrientacaoController').apiOnly()

}).middleware([ 'auth'])

