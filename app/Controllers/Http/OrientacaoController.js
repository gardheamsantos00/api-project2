'use strict'

const Orientacao = use('App/Models/Orientacao')

class OrientacaoController {

  /**
   * Show a list of all orientacaos.
   * GET orientacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const orientacoes = await Orientacao.query().with('professor').fetch()

    return orientacoes

  }


  /**
   * Create/save a new orientacao.
   * POST orientacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const  dados  = request.only([ 'nome', 'descricao', 'professor_id' ])

    const orientacao = await Orientacao.create(dados)


    return orientacao
  }

  /**
   * Display a single orientacao.
   * GET orientacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    const orientacao = await Orientacao.findOrFail(params.id)

    await orientacao.load('professor')

    return orientacao

  }



  /**
   * Update orientacao details.
   * PUT or PATCH orientacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async update ({ params, request, response }) {


  }

  /**
   * Delete a orientacao with id.
   * DELETE orientacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {


  }
}

module.exports = OrientacaoController
