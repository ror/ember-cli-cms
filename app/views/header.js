import Ember from 'ember';

export default Ember.View.extend({
  templateName: "header",

  toggleWebCurrent: function () {
    console.log("hello menu");
    this.$('.active').parent().toggleClass('current');
  }.on('didInsertElement')
});
