'use strict';

const Schema = use('Schema');

class CreatePostTableSchema extends Schema {

  up() {
    this.create('posts', (table) => {
      table.increments();
      table.string('title');
      table.text('body');

      table.integer('user_id');

      table.timestamps();
    });
  }

  down() {
    this.drop('shows');
  }

}

module.exports = CreatePostTableSchema;
