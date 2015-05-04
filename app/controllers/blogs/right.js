import Ember from 'ember';

export default Ember.Controller.extend({
  imageUrl: '/assets/images/weixin.jpg',
  imageTitle: function () {
    return "记得国际化";
    //return this.t('weixin.image_title'); //fieme Error: Assertion Failed: Missing translation for key "weixin.image_title".
  }.property(),

  hot_blogs: function(){
    return this.store.findQuery('blog', {hot: 3});
  }.property()
});
