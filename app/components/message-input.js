import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submitMessage(newMessage) {
            if (newMessage) {
                console.log("ROOM? ");
                this.sendAction('action', newMessage);
            }
            this.set('newMessage', '');
        }
    }
});
