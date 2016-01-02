/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var messagesRouter = express.Router();

  var messages = [{
    id: 1,
    message: "Hej Ember",
    speaker: "Pia",
    timestamp: "2015-12-07 14:14:13",
    room: "ember"
  },
  {
    id: 2,
    message: "Hej! Kul att ses!",
    speaker: "Ember",
    timestamp: "2015-12-07 14:15:13",
    room: "ember"
  },
  {
    id: 3,
    message: "Jag vill lära mig mer om frontend-testning",
    speaker: "Anna",
    timestamp: "2015-12-07 14:14:13",
    room: "test"
  },
  {
    id: 4,
    message: "Var börjar jag?",
    speaker: "Anna",
    timestamp: "2015-12-07 14:14:13",
    room: "test"
  },
  {
    id: 5,
    message: "http://ember-cli.com/user-guide/#testing",
    speaker: "Ember",
    timestamp: "2015-12-07 14:14:13",
    room: "test"
  }
  ]

  messagesRouter.get('/', function(req, res) {
    res.send({
      'messages': messages
    });
  });

  messagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  messagesRouter.get('/:id', function(req, res) {
    res.send({
      'messages': {
        id: req.params.id
      }
    });
  });

  messagesRouter.put('/:id', function(req, res) {
    res.send({
      'messages': {
        id: req.params.id
      }
    });
  });

  messagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/messages', require('body-parser'));
  app.use('/api/messages', messagesRouter);
};
