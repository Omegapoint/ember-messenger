import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('room', 'Unit | Model | room', {
  // Specify the other units that are required for this test.
  needs: [ 'model:message' ]
});

test('it has a name attribute', function(assert) {
  let roomModel = this.store().modelFor('room');
  let attributes = Ember.get(roomModel, 'attributes');
  let name = attributes.get('name');

  assert.equal(name.type, 'string');
});

test('it has many messages', function(assert) {
  let roomModel = this.store().modelFor('room');
  let relations = Ember.get(roomModel, 'relationshipsByName');
  let messagesRelation = relations.get('messages');

  assert.equal(messagesRelation.kind, 'hasMany');
});
