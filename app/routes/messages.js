import Ember from 'ember';

var localAuthor = 'jk7';
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
               speaker: localAuthor
           }).save();
        },
        updateAuthor(author){
          localAuthor = author;
        }
    }
});
