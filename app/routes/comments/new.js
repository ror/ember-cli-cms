import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('comment', {
      blog: this.modelFor('blogs.show'),
      account_id: this.get('session.content.secure.account_id')
    });
  },

  renderTemplate: function () {
    return this.render('comments/new', {
      into: 'blogs/show',
      outlet: 'comments-form'
    });
  },

  deactivate: function () {
    var model = this.get('controller.model');
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  },

  actions: {
    add: function () {
      var model = this.get('controller.model');
      var _this = this;
      model.save().then(function () {
        //var blog = _this.modelFor('blogs.show');
        //blog.get('comments').pushObject(model);
        _this.transitionTo('comments.index');
        //_this.transitionTo('blogs.show', _this.modelFor('blogs.show'));
      });
    },

    cancel: function () {
      this.transitionTo('comments');
    }
  }
});
