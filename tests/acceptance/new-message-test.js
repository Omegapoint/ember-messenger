import { test } from 'qunit';
import moduleForAcceptance from 'ember-messenger/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new message');

test('visiting /test', function(assert) {
  visit('/test');

  andThen(function() {
    assert.equal(currentURL(), '/test');
  });
});
test('add new message in test-room', function(assert){
  let message = 'My new test message';
  let inputId = '#new-message';
  visit('/test');
  fillIn(inputId, message);
  keyEvent(inputId,'keyup',13);
  andThen(() => {
    assert.equal(find('#chat-history li:last .msg-content').text().trim(), message);
  });
});
