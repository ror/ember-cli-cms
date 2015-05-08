import Ember from 'ember';

export default Ember.ObjectController.extend({
  name: '',
  telephone: '',

  hosts: ['163.com', '126.com', 'yeah.com'],
  selectedHost: '163.com',

  emailAccount: function () {
    return this.get('name');
  }.property('name'),

  onecoinAccount: function () {
    var email = '';

    if (this.get('emailAccount') !== '') {
      email = this.get('emailAccount') + '@' + this.get('selectedHost');
    }

    return email;
  }.property('emailAccount', 'selectedHost'),

  onepayAccount: function () {
    return this.get('onecoinAccount');
  }.property('onecoinAccount'),

  //密码设置
  emailPassword: function () {
    return this.get('name') + this.get('telephone');
  }.property('name', 'telephone'),

  onecoinPasswordBinding: 'emailPassword',
  onepayPasswordBinding: 'emailPassword',

  onecoinSignupUrl: function () {
    return "http://onecoin.eu/signup/";
  }.property()

});
