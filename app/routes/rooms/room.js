import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.store.findAll('message'); // these won't load automatically, don't know why.
    return this.store.find('room', params.room_id);
  }
});
