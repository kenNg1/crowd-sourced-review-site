import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  info: DS.attr(),
  reviews: hasMany('review',{async:true}),
  longitude: DS.attr(),
  latitude: DS.attr()
});
