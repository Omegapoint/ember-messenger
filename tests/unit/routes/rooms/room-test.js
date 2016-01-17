import { moduleFor, test } from 'ember-qunit';

moduleFor('route:rooms/room', 'Unit | Route | rooms/room', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

function makeStore(model) {
  return {
    findAll(type) { return type; /* shut up, jshint */ },
    find(type, id) {
      if (type === 'room') {
        return model[id];
      }
    }
  };
}

test('its model contains a single room from the store', function(assert) {
  let room1 = "room1";
  let room2 = "room2";
  let storedRooms = { room1: room1, room2: room2 };
  let route = this.subject({ store: makeStore(storedRooms)});
  assert.equal(route.model({ room_id: "room2" }), room2, "The model contains room 2 only.");
});
