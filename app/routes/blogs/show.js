import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.info(params);
    return this.store.find('blog', params.blog_id);
  }

  //afterModel: function() {
  //  this.transitionTo('items');
  //},
  //
  //actions: {
  //  destroyRecord: function() {
  //    var model = this.get('controller.model');
  //    var _this = this;
  //    model.destroyRecord().then(function() {
  //      _this.transitionTo('books.index');
  //    });
  //  }
  //}
});
