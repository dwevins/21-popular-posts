'use strict'

const Schema = use('Schema')

class CreateUserTableSchema extends Schema {

  up () {
    this.table('create_user_table', (table) => {
      // alter create_user_table table
    })
  }

  down () {
    this.table('create_user_table', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = CreateUserTableSchema
