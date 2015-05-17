import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    //https://github.com/simplabs/ember-simple-auth/blob/master/packages/ember-simple-auth/lib/simple-auth/mixins/application-route-mixin.js
    //login
    //sessionRequiresAuthentication: function () {
    //  this.get('session').authenticate('authenticator:onecoinim', {});
    //},

    //login success
    //sessionAuthenticationSucceeded: function() {
    //  this.get('session').set('isAuthenticated', false);
    //  console.log('I`m success');
    //},

    //login failed
    //sessionAuthenticationFailed: function (error) {
    //  this.controllerFor('application').set('loginErrorMessage', error.message);
    //},

    // fixme
    // invalidateSession 方法将废除，自己定义一个吧
    //logout
    invalidateSession: function () {
      console.log('logout');
      this.get('session').invalidate();
    }
    //sessionInvalidationSucceeded: function () {
    //  this.get('session').set('isAuthenticated', false);
    //  console.log('I`m invalidated');
    //}
  }
});
