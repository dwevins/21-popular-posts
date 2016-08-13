'use strict';

class RegisterController {
  * create(req, res) {
    yield res.sendView('register.create');
  }
}

module.exports = RegisterController;
