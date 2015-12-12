import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chat-message', 'Integration | Component | chat message', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  var message_obj = {
    message: "hej",
    timestamp: "tid",
    speaker: "user",
    room: "room",
  };
  this.set('message', message_obj);

  this.render(hbs`
    {{chat-message message=message}}
  `);

  assert.equal(this.$().text().trim(), '[tid] <user> hej');
});
