import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('author-input', 'Integration | Component | author input', {
  integration: true
});

test('it renders a Handle label and an input element', function(assert) {

  this.render(hbs`{{author-input}}`);

  assert.equal(this.$().text().trim(), 'Handle:', "It renders a 'Handle' label.");
  assert.equal(this.$("input").length, 1, "It renders one input element.");
});
