import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('message', 'Unit | Model | message', {
  // Specify the other units that are required for this test.
  needs: [ 'model:room']
});

test('it belongs to a room', function(assert) {
  let messageModel = this.store().modelFor('message');
  let relations = Ember.get(messageModel, 'relationshipsByName');

  let roomRelation = relations.get('room');

  assert.equal(roomRelation.kind, 'belongsTo');
});
