import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.filter('message', function(message) {
            return message.get('room') === "test";
        });
    },
    renderTemplate(controller, model) {
        this.render('messages.index', {
            model: model
        });
    }
});
