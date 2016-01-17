import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('focused-input', 'Integration | Component | focused input', {
  integration: true
});

test('it renders an input element', function(assert) {
  this.render(hbs`{{focused-input}}`);

  assert.equal(this.$("input").length, 1, 'It renders one input');
});
