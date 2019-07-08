'use strict'

const Model = use('Model')

class Professor extends Model {
  orientacao (){
    return this.hasMany('App/Models/Professor')
  }
}

module.exports = Professor
