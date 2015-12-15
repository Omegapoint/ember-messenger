import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.filter('message', function(message) {
            inRoom = 'ember';
            return message.get('room') === "ember";
        });
    },
    renderTemplate(controller, model) {
        this.render('messages.index', {
            model: model
        });
    }
});
