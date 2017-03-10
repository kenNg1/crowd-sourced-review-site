import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  detail: DS.attr(),
  rating: DS.attr(),
  thumbsUp: DS.attr(),
  thumbsDown: DS.attr(),
  festival: belongsTo('festival', {asyn:true})
});
