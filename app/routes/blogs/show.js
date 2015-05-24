import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('blog', params.blog_id);
  },

  afterModel: function (blog) {
    if (blog.get('comments_count') > 0){
      this.transitionTo("comments", blog);
    }
  },

  setupController: function (controller, model) {
    this._super(controller, model);
  }
});
