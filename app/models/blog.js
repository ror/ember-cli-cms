import DS from 'ember-data';
//import Ember from 'ember';

var attr = DS.attr;

var Blog = DS.Model.extend({
  title: attr(),
  body: attr(),   // 这里的content与系统方法重名，不能用于属性名称
  created_at: attr('date'),
  updated_at: attr('date')
});

// probably should be mixed-in...
//Blog.reopen({
//  attributes: function () {
//    var model = this;
//    return Ember.keys(this.get('data')).map(function (key) {
//      return Ember.Object.create({model: model, key: key, valueBinding: 'model.' + key});
//    });
//  }.property()
//});

Blog.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Bugs', body: 'Bunny is a good.', created_at: '', updated_at: ''},
    {id: 2, title: 'Write E', body: 'Coyote is a bad.', created_at: '', updated_at: ''}
  ]
});

export default Blog;
