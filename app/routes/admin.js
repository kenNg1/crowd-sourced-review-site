import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      festivals: this.store.findAll('festival'),
      reviews: this.store.findAll('review')
    })
  },
  actions: {
    newFestival(params){
      var newFestival= this.store.createRecord('festival',params);
      newFestival.save();
    },
    destroyFestival(festival){
      festival.destroyRecord();
    }
  }
});
