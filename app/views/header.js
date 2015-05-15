import Ember from 'ember';

export default Ember.View.extend({
  templateName: "header",

  toggleWebCurrent: function () {
    console.log("hello menu");
    this.$('a.active').parent().addClass('current');
  }.on('didInsertElement')
});
