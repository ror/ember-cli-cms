import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    category: {
      refreshModel: true
    }
  },

  model: function (params) {
    return this.store.findQuery('blog', params);
  }
});
