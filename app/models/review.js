import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  detail: DS.attr(),
  rating: DS.attr(),
  up: DS.attr(),
  votedUp: DS.attr(),
  down: DS.attr(),
  votedDown: DS.attr(),
  festival: DS.belongsTo('festival', {async:true}),
});
