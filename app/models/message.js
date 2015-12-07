import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr('string'),
  timestamp: DS.attr('string'),
  room: DS.attr('string'),
  speaker: DS.attr('string')
});
