import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAuthor(author) {
      author = author.replace(/\W/g, '').substring(0, 15);
      this.sendAction('action', author);
    }
  }
});
