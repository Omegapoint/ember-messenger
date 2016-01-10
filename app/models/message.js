import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr('string'),
  timestamp: DS.attr('date'),
  room: DS.belongsTo('room'),
  speaker: DS.attr('string'),
});
