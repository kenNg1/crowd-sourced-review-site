import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newFestival(){
      var params = {
        name: this.get('name'),
        info: this.get('info'),
        capacity: this.get('capacity'),
        longitude: this.get('longitude'),
        latitude: this.get('latitude')
      };
      this.sendAction('newFestival',params);
    }
  }
});
