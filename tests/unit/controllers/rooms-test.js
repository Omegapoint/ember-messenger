import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:rooms', 'Unit | Controller | rooms', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('author is initialized to "anonymous"', function(assert) {
  let controller = this.subject();

  assert.equal(controller.get('author'), "anonymous");
});

test('updateAuthor updates author name', function(assert) {
  let controller = this.subject();
  let newAuthor = "Pia";

  controller.send('updateAuthor', newAuthor);

  assert.equal(controller.get('author'), newAuthor, "Username is updated");
});
