import { moduleFor, test } from 'ember-qunit';

moduleFor('route:room', 'Unit | Route | room', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it has a model', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
