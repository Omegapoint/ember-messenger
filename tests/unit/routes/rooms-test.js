import { moduleFor, test } from 'ember-qunit';

moduleFor('route:rooms', 'Unit | Route | rooms', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('its model contains some valid room', function(assert) {
  let route = this.subject();
  let model = route.get('model');

  assert.ok(model().length > 0);

  let firstRoom = model()[0];
  assert.ok(firstRoom.id);
  assert.ok(firstRoom.name);
});
