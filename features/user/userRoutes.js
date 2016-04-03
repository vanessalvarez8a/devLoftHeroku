var ctrl = require('./userCtrl');

module.exports = function( app ) {
  app.route('/api/user')
      .post(ctrl.addUser)
      .get(ctrl.getUser)
  app.route('/api/user/:id')
      .get(ctrl.getOneUser)
      .put(ctrl.putUser)
      .delete(ctrl.deleteUser)
}
