import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createMessage(newMessage) {
      let record = this.store.createRecord('message', {
          message: newMessage,
          timestamp: new Date(),
          room: this.model.id,
          speaker: "me"
      });
      this.model.get('messages').addObject(record);
      this.model.save();
    }
  }
});
