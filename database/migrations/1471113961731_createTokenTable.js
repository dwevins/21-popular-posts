'use strict'

const Schema = use('Schema')

class CreateTokenTableSchema extends Schema {

  up () {
    this.table('create_token_table', (table) => {
      // alter create_token_table table
    })
  }

  down () {
    this.table('create_token_table', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = CreateTokenTableSchema
