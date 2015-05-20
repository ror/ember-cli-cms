import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  // The code below is the default behavior, so if this is all you
  // need, you do not need to provide a setupController implementation
  // at all.
  setupController: function (controller, model) {
    this._super(controller, model);
  },

  actions: {
    // 参考：
    // https://github.com/simplabs/ember-simple-auth/blob/master/packages/ember-simple-auth/lib/simple-auth/mixins/application-route-mixin.js
    //
    // logout
    invalidateSession: function () {
      this.get('session').invalidate();
    },

    sessionAuthenticationSucceeded: function() {
      this._super();
      console.log("supper");
    },

    sessionAuthenticationFailed: function(error) {
      this.controllerFor('application').set('loginErrorMessage', error.message);
    }
  }
});
