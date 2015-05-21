import Ember from 'ember';

export default Ember.Route.extend({
  activate: function () {
    if (!this.get('session').isAuthenticated) {
      return this.transitionTo('login');
    }
    return this.send('openModal', 'modals/logout', this.get('model'));
  }
});
