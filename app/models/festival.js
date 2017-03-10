import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  info: DS.attr(),
  capacity: DS.attr(),
  reviews: DS.hasMany('review',{async:true}),
  longitude: DS.attr(),
  latitude: DS.attr(),
  averageScore: Ember.computed('reviews.@each.rating', function() {
      return this.get('reviews').reduce(function(sum, review) {
        return sum += review.get('rating');
      }, 0) / this.get('reviews').get('length');
    })
});
