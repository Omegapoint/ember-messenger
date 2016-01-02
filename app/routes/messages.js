import Ember from 'ember';

var inRoom = 'test';
var localAuthor = 'anonymous';
export default Ember.Route.extend({
    model() {
        return this.store.findAll('message');
    },

    actions: {
        createMessage(newMessage) {
           this.store.createRecord('message', {
               message: newMessage,
               timestamp: new Date(),
               room: inRoom,
               speaker: localAuthor
           }).save();
        },
        updateAuthor(author){
          localAuthor = author;
        }
    }
});
