import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      festivals: this.store.findAll('festival'),
      reviews: this.store.findAll('review')
    });
  },
  setupController(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    // Implement your custom setup after
    controller.set('abc', "abc2");
    controller.set('abc2', "abc3");
  }
});
