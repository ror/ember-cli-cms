import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: {},

  hasError: function () {
    if (!Ember.isEmpty(this.get('errorMessage.error'))) {
      return true;
    }
    return false;
  }.property('errorMessage'),

  rememberMe: false,

  // change the store's cookie expiration time depending on whether "remember me" is checked or not
  rememberMeChanged: function() {
    this.get('session.store').cookieExpirationTime = this.get('rememberMe') ? 1209600 : null;
  }.observes('rememberMe'),

  actions: {
    //login
    authenticate: function() {
      var _this = this;
      var data = this.getProperties('identification', 'password');
      this.get('session').authenticate('simple-auth-authenticator:devise', data).then(function () {
        console.log(_this.get('session').content.toString());
      },
        function(message) {
        _this.set('errorMessage', message);
      });
    }
  }
});
