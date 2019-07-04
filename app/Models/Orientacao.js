'use strict'

const Model = use('Model')

class Orientacao extends Model {

  professor (){
    return this.hasOne('App/Models/Professor')
  }

}

module.exports = Orientacao
