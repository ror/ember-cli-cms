import Ember from 'ember';

export default Ember.Controller.extend({
  categories: ["announcement", "manual", "news", "tutorial"],
  // initial value
  actived: '',

  actions: {
    select: function (item) {
      this.set('actived', item);
      console.log(item);
    }
  }
});
