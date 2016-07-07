var people = [
    {id: 1, tos: false},
    {id: 2, tos: false},
    {id: 3, tos: false}
];

module.exports = function(app) {
  var express = require('express');
  var peopleRouter = express.Router();

  peopleRouter.get('/', function(req, res) {
    res.send(people);
  });

  app.use('/api/people', peopleRouter);
};
