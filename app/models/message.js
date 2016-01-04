import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr('string'),
  timestamp: DS.attr('date'),
  room: DS.attr('string'),
  speaker: DS.attr('string'),

  displayTime: function () {
    return this.get('timestamp').toLocaleTimeString();
  }.property('timestamp'),
});
