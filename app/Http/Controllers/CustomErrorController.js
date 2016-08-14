'use strict';

class CustomErrorController {
  * noAuth(req, res) {
    yield res.sendView('custom-errors.noAuth');
  }
}

module.exports = CustomErrorController;
