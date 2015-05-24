import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  scrollDuration: 1000, //default
  // The code below is the default behavior, so if this is all you
  // need, you do not need to provide a setupController implementation
  // at all.
  setupController: function (controller, model) {
    this._super(controller, model);
    this.controller.set('hot_blogs', this.hot_blogs());
    this.controller.set('comments', this.comments());
  },

  hot_blogs: function () {
    return this.store.findQuery('blog', {hot: 10});
  },

  comments: function () {
    return this.store.findQuery('comment', {recent: 10});
  },

  actions: {
    // auth
    // 参考：
    // https://github.com/simplabs/ember-simple-auth/blob/master/packages/ember-simple-auth/lib/simple-auth/mixins/application-route-mixin.js
    //
    // logout
    invalidateSession: function () {
      this.get('session').invalidate();
    },

    sessionAuthenticationSucceeded: function () {
      //this.transitionTo('index');
      this._super();
    },

    sessionAuthenticationFailed: function (error) {
      this.controllerFor('application').set('loginErrorMessage', error.message);
    },

    //操作弹出窗口
    openModal: function (modalName, model) {
      if (!!model) {
        this.controllerFor(modalName).set('model', model);
      }

      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },

    closeModal: function () {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },

    // 解决 anchor 问题
    scrollTo: function (selector) {
      Ember.$('body').animate({
          scrollTop: Ember.$(selector).offset().top
        }, this.get("scrollDuration")
      );
    }
  }
});
