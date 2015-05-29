import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('page');
  }

  //serialize: function (model) {
  //  // this will make the URL `/posts/foo-post`
  //  return {page_slug: model.get('slug')};
  //}
});
