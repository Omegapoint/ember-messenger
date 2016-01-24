import Ember from 'ember';

export default Ember.Controller.extend({
  rooms: Ember.inject.controller(),

  actions: {
    createMessage(newMessage) {
      let record = this.store.createRecord('message', {
          message: newMessage,
          timestamp: new Date(),
          author: this.get('rooms').get('author')
      });
      this.model.get('messages').addObject(record);
      record.save();
    }
  }
});
