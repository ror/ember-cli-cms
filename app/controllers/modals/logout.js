import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logout: function() {
      return this.send('invalidateSession');
    },

    closeMe: function () {
      this.send('closeModal');
      return this.transitionTo('/');
    }
  }
});
