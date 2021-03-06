import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteReview(review) {
      if (confirm("Are you sure you want to delete?")) {
        review.destroyRecord();
      };
    }
  }
});
