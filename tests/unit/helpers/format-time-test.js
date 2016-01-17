import { formatTime } from '../../../helpers/format-time';
import { module, test } from 'qunit';

module('Unit | Helper | format time');

test('it formats date to locale time', function(assert) {
  let date = new Date();
  let expected = date.toLocaleTimeString();
  let actual = formatTime([date]);
  assert.equal(actual, expected, "Formatted date should be a localeTimeString.");
});
