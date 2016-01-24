import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('message', 'Unit | Model | message', {
  // Specify the other units that are required for this test.
  needs: [ 'model:room']
});

test('it has message, author, and time fields', function(assert) {
  let messageModel = this.store().modelFor('message');
  let attributes = Ember.get(messageModel, 'attributes');

  let message = attributes.get('message');
  assert.ok(message, "Model has a message attribute.");
  assert.equal(message.type, 'string', "Message attribute has string type.");

  let author = attributes.get('author');
  assert.ok(author, "Model has an author attribute.");
  assert.equal(author.type, 'string', "Author attribute has string type.");

  let timestamp = attributes.get('timestamp');
  assert.ok(timestamp, "Model has a timestamp attribute.");
  assert.equal(timestamp.type, 'date', "Timestamp attribute has date type.");
});

test('it belongs to a room', function(assert) {
  let messageModel = this.store().modelFor('message');
  let relations = Ember.get(messageModel, 'relationshipsByName');

  let roomRelation = relations.get('room');

  assert.equal(roomRelation.kind, 'belongsTo');
});
