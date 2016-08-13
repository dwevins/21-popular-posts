'use strict';


class LoginController {
  * create(req, res) {
    yield res.sendView('login.create');
  }

}

module.exports = LoginController;
