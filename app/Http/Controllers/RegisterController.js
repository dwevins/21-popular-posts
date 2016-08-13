'use strict';

const User = use('App/model/User');
const Hash = use('Hash');

class RegisterController {
  * create(req, res) {
    yield res.sendView('register.create');
  }

  * store(req, res) {
    const { email, username, password } = req.all();
    try {
      yield User.create({ email, username, password: yield Hash.make(password) });

      yield req.with({ success: 'Registration successful' })
        .flash();

      res.redirect('/login');
    } catch (e) {
      yield req.withAll()
        .andWith({ error: 'Could not create user.' })
        .flash();

      res.redirect('back');
    }
  }
}

module.exports = RegisterController;
