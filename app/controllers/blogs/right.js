import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  hot_blogs: Ember.computed.alias("controllers.application.hot_blogs"),
  comments: Ember.computed.alias("controllers.application.comments"),

  imageUrl: '/assets/images/weixin.jpg',
  imageTitle: function () {
    return "记得国际化";
    //return this.t('weixin.image_title'); //fieme Error: Assertion Failed: Missing translation for key "weixin.image_title".
  }.property()
});
