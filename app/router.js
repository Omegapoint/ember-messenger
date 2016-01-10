import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rooms', { path: '/'}, function () {
    this.route('room', { path: '/:room_id' });
  });
});


export default Router;
