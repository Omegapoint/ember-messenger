import Ember from 'ember';

export default Ember.Controller.extend({
  author: 'anonymous',

  actions: {
    updateAuthor(author) {
      this.set('author', author);
    },
    createRoom(){
      let room = prompt('Please enter room name\n(max 15 character, no spaces)', '');
      if (room !== null || room === '') {
          room = room.replace(/\s/g, '').substring(0,15);
          let record = this.store.createRecord('room', {
              id: room,
              name: room
          });
          record.save();
      }
    }
  }
});
