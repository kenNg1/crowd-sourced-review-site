import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('festival', params.festival_id);
  },
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var festival = params.festival;
      festival.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return festival.save();
      });
    }
  }
});
