'use strict'

const Professor = use('App/Models/Professor')

class ProfessorController {

  /**
   * Show a list of all professors.
   * GET professors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const professor = await Professor.all()

    return professor

  }



  /**
   * Create/save a new professor.
   * POST professors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const dados = request.only([ 'nome' ])

    const professor = await Professor.create(dados)

    return professor

  }





  /**
   * Display a single professor.
   * GET professors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {

    const professor = await Professor.findOrFail(params.id)

    return professor


  }



  /**
   * Update professor details.
   * PUT or PATCH professors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request}) {

    const professor = await Professor.findOrFail(params.id)
    const dados = request.only([ 'nome' ])

    professor.merge(dados)

    await professor.save()

    return professor

  }



  /**
   * Delete a professor with id.
   * DELETE professors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const professor = await Professor.findOrFail(params.id)

    await professor.delete()


  }
}

module.exports = ProfessorController
