import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('message');
    },

    actions: {
        createMessage(newMessage) {
           this.store.createRecord('message', {
               message: newMessage,
               timestamp: '2015-12-14 21:00',
               room: 'test',
               speaker: 'Anna'
           }).save();
        }
    }
});
