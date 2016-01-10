import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('room');
  },

  actions: {
    changedRoom() {
      console.log("changed room!");
    }
  }
});
