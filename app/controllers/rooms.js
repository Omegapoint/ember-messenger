import Ember from 'ember';

export default Ember.Controller.extend({
  userName: 'anonymous',

  actions: {
    updateAuthor(newUserName) {
      this.set('userName', newUserName);
    },
    createRoom(){
      let room = prompt('Please enter room name', '');
      if (room != null || room == '') {
          console.log('Add new room '+room);
      }
    }
  }
});
