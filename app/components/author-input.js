import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAuthor(author) {
      author = author.replace(/\W/g, '').trim();
      this.sendAction('action', author);
    }
  }
});
