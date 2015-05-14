import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.findQuery('page', params);
  },

  serialize: function (model) {
    // this will make the URL `/posts/foo-post`
    return {page_slug: model.get('slug')};
  }
});
