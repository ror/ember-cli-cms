import Ember from 'ember';

export default Ember.View.extend({
  _trunk8: function() {
    this.$("#body").trunk8({
      fill:  '...',
      lines: 5,
      tooltip: true,
      parseHTML: false
    });
  }.on('didInsertElement')
});
