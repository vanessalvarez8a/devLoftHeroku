var ctrl = require('./projectCtrl');

module.exports = function( app ) {
  app.route('/api/project')
      .post(ctrl.addProject)
      .get(ctrl.getProject)
  app.route('/api/project/:id')
      .get(ctrl.getOneProject)
      .put(ctrl.putProject)
      .delete(ctrl.deleteProject)
  app.route('/api/project/:userid')
      .post(ctrl.addProject)
}
