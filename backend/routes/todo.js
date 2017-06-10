var express = require('express');
var _ = require('lodash');
var router = express.Router();

var todos = require('../data/todos');

router.get('/todos', function(req, res, next) {
  res.json(todos);
});

router.post('/todos', function (req, res, next) {
  var todo = req.body;
  todo.id = todos.length + 1;
  todos.push(todo);
  res.json(todo);
});

router.put('/todos/:id', function (req, res, next) {
  if (req.body.id == req.params.id) {
    var todo = _.find(todos, function (todo) {
      return todo.id == req.params.id;
    });
    _.each(_.keys(todo), function (attr) {
      todo[attr] = req.body[attr];
    });
    res.status(204).send();
  } else {
    res.status(400).send({ message: "Id in body and url do not match" });
  }
});

module.exports = router;
