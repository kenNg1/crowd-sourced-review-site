import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview(){
      var params = {
        author: this.get('author'),
        detail: this.get('detail'),
        rating: parseInt(this.get('rating')),
        up: 0,
        votedUp: false,
        down: 0,
        votedDown: false,
        festival: this.get('festival')
      };
      this.sendAction('saveReview',params);
    }
  }
});
