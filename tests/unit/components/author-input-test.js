import { moduleFor, test } from 'ember-qunit';

moduleFor('component:author-input', 'Unit | Component | author-input', {
  // Specify the other units that are required for this test.
});

test("it delets whitespace in author name.", function(assert) {
  let component = this.subject();

  component.actions.sendAction = function(action, arg) {
    assert.equal(arg, "JuniorHacker", "No whitespace in author name.");
  };

  component.actions.updateAuthor("Junior Hacker");
});
