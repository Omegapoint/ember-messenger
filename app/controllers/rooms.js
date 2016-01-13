import Ember from 'ember';

export default Ember.Controller.extend({
  userName: "anonymous",

  actions: {
    updateAuthor(newUserName) {
      this.set('userName', newUserName);
    },
    createRoom(){
      console.log("create room btn pressed..");
    }
  }
});
