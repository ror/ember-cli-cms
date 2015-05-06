import Ember from 'ember';

export default Ember.Route.extend({
  //fixme 没有起到作用？
  queryParams: {
    category: {
      refreshModel: true
    }
  },

  model: function (params) {
    return this.store.findQuery('blog', params);
  }
});
