/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var bodyParser = require('body-parser');
  var messagesRouter = express.Router();

  var messages = [{
    id: 1,
    message: "Hej Ember",
    author: "Pia",
    timestamp: new Date(),
    room: "ember"
  },
  {
    id: 2,
    message: "Hej! Kul att ses!",
    author: "Ember",
    timestamp: new Date(),
    room: "ember"
  },
  {
    id: 3,
    message: "Jag vill lära mig mer om frontend-testning",
    author: "Anna",
    timestamp: new Date(),
    room: "test"
  },
  {
    id: 4,
    message: "Var börjar jag?",
    author: "Anna",
    timestamp: new Date(),
    room: "test"
  },
  {
    id: 5,
    message: "http://ember-cli.com/user-guide/#testing",
    author: "Ember",
    timestamp: new Date(),
    room: "test"
  }
  ]

  messagesRouter.get('/', function(req, res) {
    res.send({
      'messages': messages
    });
  });

  messagesRouter.post('/', function(req, res) {
    var message = req.body.message;
    message.id = Math.random();
    messages.push(message);
    res.status(201).send({'messages': message});
  });

  messagesRouter.get('/:id', function(req, res) {
    res.send({
      'messages': {
        id: req.params.id
      }
    });
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/messages', messagesRouter);
};
