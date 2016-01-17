import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:rooms.room', 'Unit | Controller | rooms.room', {
  // Specify the other units that are required for this test.
  needs: ['controller:rooms', 'model:room', 'model:message']
});

test('createMessage creates a new message', function(assert) {
  let model = Ember.Object.create({ id: "room_id", messages: [], save() {} });
  let controller = this.subject({ model: model});

  Ember.run(function () {
    controller.send('createMessage', "Hi! I'm a new message");

    assert.equal(model.messages.length, 1, "A message should be created");
  });
});

test('createMessage creates a message with rooms author', function(assert) {
  let model = Ember.Object.create({ id: "room_id", messages: [], save() {} });
  let controller = this.subject({ model: model});

  Ember.run(function () {
    let roomsController = controller.get('rooms');
    let author = "Batman";

    roomsController.set('userName', author);
    controller.send('createMessage', "Hi! I'm a new message");
    assert.equal(model.messages.length, 1, "One message should be created");

    let createdMessage = model.messages[0];
    assert.equal(createdMessage.get('speaker'), author, "Gets author from parent controller.");
  });
});

test('createMessage creates the given message', function(assert) {
  let model = Ember.Object.create({ id: "room_id", messages: [], save() {} });
  let controller = this.subject({ model: model});

  Ember.run(function() {
    let message = "I'm a new message";

    controller.send('createMessage', message);
    assert.equal(model.messages.length, 1, "One message should be created");
    let createdMessage = model.messages[0];

    assert.equal(createdMessage.get('message'), message, "Creates the given message.");
  });
});

test('createMessage creates a message in the current room', function(assert) {
  let model = Ember.Object.create({ id: "room_id", messages: [], save() {} });
  // If we don't mock the store here, we'll have to create a larger test model
  // (because room is a reference)
  // so let's mock the store.
  let store = { createRecord(model, obj) {
    return Ember.Object.create(obj);
  }};
  let controller = this.subject({ model: model, store: store});

  Ember.run(function() {
    controller.send('createMessage', "I'm a new message");
    assert.equal(model.messages.length, 1, "One message should be created");
    let createdMessage = model.messages[0];

    assert.equal(createdMessage.get('room'), model.get("id"), "Creates a message in room " + model.get("id") + ".");
  });
});
