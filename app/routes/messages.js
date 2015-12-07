import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let messages = [
            {
                message: "Learn Ember",
                speaker: "Pia",
                timestamp: "2015-12-07 14:14",
            },
            {
                message: "Solve World Hunger",
                speaker: "Anna",
                timestamp: "2020-12-12 07:45",
            }
        ];
        return messages;
    }
});
