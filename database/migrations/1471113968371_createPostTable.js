'use strict'

const Schema = use('Schema')

class CreatePostTableSchema extends Schema {

  up () {
    this.table('create_post_table', (table) => {
      // alter create_post_table table
    })
  }

  down () {
    this.table('create_post_table', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = CreatePostTableSchema
