import Ember from 'ember';

export default Ember.Controller.extend({
  rooms: Ember.inject.controller(),

  actions: {
    createMessage(newMessage) {
      let record = this.store.createRecord('message', {
          message: newMessage,
          timestamp: new Date(),
          speaker: this.get('rooms').get('userName')
      });
      this.model.get('messages').addObject(record);
      record.save();
    }
  }
});
