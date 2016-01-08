import Ember from 'ember';

let emberRoom = {
  id: 1,
  name: "ember"
};

let testRoom = {
  id: 2,
  name: "test"
};

let duchessRoom = {
  id: 3,
  name: "duchess"
};


export default Ember.Route.extend({
  model: function () {
    return [ emberRoom, testRoom ];
  },

  actions: {
    changedRoom() {
      console.log("changed room!");
    }
  }
});
