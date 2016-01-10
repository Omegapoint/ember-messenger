import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chat-history', 'Integration | Component | chat history', {
  integration: true
});

let room = { id: "1", name: "room" };
let time = new Date();
let messages = [{
  message: "hej",
  timestamp: time,
  speaker: "user1",
  room: room,
},
{
  message: "hoj",
  timestamp: time,
  speaker: "user3",
  room: room,
},
{
  message: "häj",
  timestamp: time,
  speaker: "user3",
  room: room,
}
];

test('it renders all messages in history', function(assert) {

  this.set('history', messages);
  this.render(hbs`{{chat-history history=history}}`);

  let renderedText = this.$().text();

  assert.ok(renderedText.indexOf(messages[0].message) >= 0);
  assert.ok(renderedText.indexOf(messages[1].message) >= 0);
  assert.ok(renderedText.indexOf(messages[2].message) >= 0);
});
