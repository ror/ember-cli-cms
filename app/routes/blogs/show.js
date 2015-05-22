import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    console.log('hello blog');
    return this.store.find('blog', params.blog_id);
  },

  afterModel: function() {
    console.log('aftermodel');
    //this.refresh();
    //this.get("model").then(function (blog) {
    //  var count = blog.get('view_count') + 1;
    //
    //  blog.set('view_count', count);
    //
    //  blog.save(); // => PUT to '/posts/1'
    //});
  }
});
