import Ember from 'ember';

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
               room: this.controllerFor("application").get("currentPath").substring(9),
               speaker: localAuthor
           }).save();
        },
        updateAuthor(author){
          localAuthor = author;
        }
    }
});
