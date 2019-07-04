'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrientacaoSchema extends Schema {
  up () {
    this.create('orientacaos', (table) => {
      table.increments()
      table.string('nome', 150).notNullable()
      table.string('descricao', 240).notNullable()
      table
        .integer('professor_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('professors')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('orientacaos')
  }
}

module.exports = OrientacaoSchema
