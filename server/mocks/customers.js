var customers = [
    {id: 1, name: 'toran'},
    {id: 2, name: 'brandon'},
    {id: 3, name: 'jarrod'}
];

module.exports = function(app) {
  var express = require('express');
  var customersRouter = express.Router();

  customersRouter.get('/', function(req, res) {
    res.send(customers);
  });

  app.use('/api/customers', customersRouter);
};
