import Ember from 'ember';

export function formatTime(params) {
  let timestamp = params[0];
  return timestamp;
}

export default Ember.Helper.helper(formatTime);
