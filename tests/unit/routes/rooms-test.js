import { moduleFor, test } from 'ember-qunit';

moduleFor('route:rooms', 'Unit | Route | rooms', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});


function makeStore(model) {
  return {
    findAll(type) {
      if (type === 'room') {
        return model;
      }
      return [];
    }
  };
}

test('its model contains all room objects in the store', function(assert) {
  let storedRooms = [ "fake", "fake" ];
  let route = this.subject({ store: makeStore(storedRooms)});
  assert.equal(route.model().length, 2, "There are two model elements.");
  assert.deepEqual(route.model(), storedRooms, "The model elements are the ones returned by the store.");
});
