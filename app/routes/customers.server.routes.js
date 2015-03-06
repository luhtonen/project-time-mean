'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
  customers = require('../../app/controllers/customers.server.controller');

module.exports = function(app) {
  // Customer Routes
  app.route('/customers')
    .get(customers.list)
    .post(users.requiresLogin, customers.create);

  app.route('/customer/:customerId')
    .get(customers.read)
    .put(users.requiresLogin, customers.hasAuthorization, customers.update)
    .delete(users.requiresLogin, customers.hasAuthorization, customers.delete);

  // Finish by binding the customer middleware
  app.param('customerId', customers.customerByID);
};
