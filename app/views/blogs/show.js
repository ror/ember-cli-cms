import Ember from 'ember';

export default Ember.View.extend({

  update_views_count: function () {
    var blog = this.get('controller.model');
    var _this = this;
    blog.save().then(
      function (blog) {
        return _this.set('controller.model', blog);
      },
      null
    );
  }.on('didInsertElement')

});
