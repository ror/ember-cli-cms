import Ember from 'ember';

export default Ember.Controller.extend({
  errors: {},

  hasError: function () {
    if (!Ember.isEmpty(this.get('errors'))) {
      return true;
    }
    return false;
  }.property('errors'),

  actions: {
    register: function () {
      var _this = this;
      var data = this.getProperties('name', 'surname', 'email', 'password', 'password_confirmation');
      var user = this.store.createRecord('user', data);


      user.save().then(
        function () {
          var login = {identification: _this.get('email'), password: _this.get('password')};
          _this.get('session').authenticate('simple-auth-authenticator:devise', login);
          console.log("success"); //todo 应该添加跳转或登录
        },

        function (message) {
          _this.set('errors', message.errors);
        });
    }
  }
});
