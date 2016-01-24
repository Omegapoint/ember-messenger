import Ember from 'ember';

export default Ember.Controller.extend({
  author: 'anonymous',

  actions: {
    updateAuthor(author) {
      this.set('author', author);
    },
  }
});
