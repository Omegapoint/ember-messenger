import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('messages', { path: '/'}, function() {
    this.route('ember');
    this.route('test');
  });
  this.route('rooms', function () {
    this.route('room', { path: '/:room_id' });
  });
});


export default Router;
