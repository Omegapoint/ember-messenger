import { moduleForModel, test } from 'ember-qunit';

moduleForModel('room', 'Unit | Model | room', {
  // Specify the other units that are required for this test.
  needs: [ 'model:message' ]
});

test('this makes this file pass jshint ', function (assert) {
  assert.ok("and this is your starting point for the test.");
});
