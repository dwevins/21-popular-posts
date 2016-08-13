'use strict';

const User = use('App/model/User');
const Hash = use('Hash');

class LoginController {
  * create(req, res) {
    yield res.sendView('login.create');
  }

}

module.exports = LoginController;
