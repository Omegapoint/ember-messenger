import { test } from 'qunit';
import moduleForAcceptance from 'ember-messenger/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | edit handle');

test('changing a handle', function(assert) {
  let authorInput = 'input#author';
  let msgInput = 'input#new-message';

  // Visit a room we think is there
  visit('/ember');

  // Update author handle
  fillIn(authorInput, "Martin Luther King");
  keyEvent(authorInput, 'keyup', '13');

  // Write a chat message
  fillIn(msgInput, "I have a dream.");
  keyEvent(msgInput, 'keyup', '13');

  // expect last message in chat history be written by the new username;
  andThen(function() {
    assert.equal(find('#chat-history li:last .msg-who').text().trim(), "MartinLutherKin@ember$", "Author of last message is handle without spaces");
  });
});
