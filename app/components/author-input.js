import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAuthor(author) {
      this.sendAction('action', author);
    }
  }
});
