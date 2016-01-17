import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('message-input', 'Integration | Component | message input', {
  integration: true
});

test('it renders a prompt and an input element', function(assert) {

  this.render(hbs`{{message-input}}`);

  assert.equal(this.$().text().trim(), '$', "It renders a prompt.");
  assert.equal(this.$("input").length, 1, "It renders one input element.");
});
