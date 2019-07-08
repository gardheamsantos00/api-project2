'use strict'

const Model = use('Model')

class Orientacao extends Model {

  professor (){
    return this.belongsTo('App/Models/Professor')
  }

}

module.exports = Orientacao
