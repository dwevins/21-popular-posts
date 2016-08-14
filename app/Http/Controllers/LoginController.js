'use strict';


class LoginController {

  * create(req, res) {
    yield res.sendView('login.create');
  }

  * store(req, res) {
    const { email, password } = req.all();

    try {
      yield req.auth.attempt(email, password);

      yield req.with({ success: 'Login successful' })
      .flash();

      res.redirect('/post');
    } catch (e) {
      yield req.withAll().andWith({ error: 'Email and password do not match' })
      .flash();

      res.redirect('back');
    }
  }

  * destroy(req, res) {
    yield req.auth.logout();

    yield req.with({ success: 'logged out' })
    .flash();

    res.redirect('/login');
  }

}

module.exports = LoginController;
