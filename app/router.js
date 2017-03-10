import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('discover');
  this.route('festival', {path: '/festival/:festival_id'});
});

export default Router;
