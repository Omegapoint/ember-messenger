import Ember from 'ember';

export default Ember.Controller.extend({
  rooms: Ember.inject.controller(),

  actions: {
    createMessage(newMessage) {
      let record = this.store.createRecord('message', {
          message: newMessage,
          timestamp: new Date(),
          room: this.get('model').get('id'),
          speaker: this.get('rooms').get('userName')
      });
      this.model.get('messages').addObject(record);
      this.model.save();
    }
  }
});
