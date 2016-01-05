import Ember from 'ember';

var localAuthor = 'anonymous';
var inRoom = 'nowhere';

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
          if (localAuthor === '') {
            localAuthor = 'anonymous';
          }
        },
        changedRoom(){
          var path = this.controllerFor('application').get('currentPath');
          inRoom = path.substring(9); //to remove 'message.'
          if(inRoom === 'index'){
            inRoom = 'nowhere';
          }
        }
    }
});
