'use strict';

const Schema = use('Schema');

class CreateUserTableSchema extends Schema {

  up() {
    this.create('users', (table) => {
      table.increments();
      table.string('email', 254).notNullable().unique();
      table.string('password', 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }

}

module.exports = CreateUserTableSchema;
