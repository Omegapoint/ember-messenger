import { moduleFor, test } from 'ember-qunit';

moduleFor('route:rooms/index', 'Unit | Route | rooms/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

function makeStore(model) {
  return {
    findAll(type) {
      if (type === 'message') {
        return model;
      }
      return [];
    }
  };
}

test('its model contains all message objects in the store', function(assert) {
  let storedMessages = [ "fake", "fake" ];
  let route = this.subject({ store: makeStore(storedMessages)});
  assert.equal(route.model().length, 2, "There are two model elements.");
  assert.deepEqual(route.model(), storedMessages, "The model elements are the ones returned by the store.");
});
