import { moduleFor, test } from 'ember-qunit';

moduleFor('route:rooms/index', 'Unit | Route | rooms/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('its model contains all message objects in the store', function(assert) {
  let fake = { fake: "fake"};
  let storedMessages = [ fake, fake ];
  let store = {
    findAll(model) {
      if (model === "message") {
          return [ fake, fake ];
      }
      return [];
    }
  };
  let route = this.subject({ store: store });
  route.store = store;
  assert.equal(route.model().length, 2, "There are two model elements.");
  assert.deepEqual(route.model(), storedMessages, "The model elements are the ones returned by the store.");
});
