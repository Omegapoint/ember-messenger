import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chat-message', 'Integration | Component | chat message', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  let time = new Date();
  let message = {
    message: "hej",
    displayTime: time.toLocaleTimeString(),
    speaker: "user",
    room: "room",
  };
  this.set('message', message);

  this.render(hbs`
    {{chat-message message=message}}
  `);

  assert.equal(this.$(".msg-timestamp").text().trim(), '[' + time.toLocaleTimeString() + ']');
  assert.equal(this.$(".msg-who").text().trim(), 'user@room$');
  assert.equal(this.$(".msg-content").text().trim(), "hej");
});
