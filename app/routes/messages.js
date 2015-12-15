import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('message');
    },

    actions: {
        createMessage(newMessage) {
           this.store.createRecord('message', {
               message: newMessage,
               timestamp: new Date().toLocaleString(),
               room: 'test',
               speaker: 'Anna'
           }).save();
        }
    }
});
