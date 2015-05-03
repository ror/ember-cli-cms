import DS from 'ember-data';
//import Ember from 'ember';

var attr = DS.attr;

var Blog = DS.Model.extend({
  title: attr(),
  slug_url: attr(),
  body: attr(),
  body_en: attr(),
  user: attr(),
  view_count: attr(),
  commentable: attr(),
  has_i18n: attr(),
  comments_count: attr(),
  cached_tag_list:  attr(),
  category: attr(),
  created_at: attr('date'),
  content_updated_at: attr('date')
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

//Blog.reopenClass({
//  FIXTURES: [
//    {id: 1, title: 'Bugs', body: 'Bunny is a good.', created_at: '', updated_at: '', category: 'news'},
//    {id: 2, title: 'Write E', body: 'Coyote is a bad.', created_at: '', updated_at: '', category: 'announcement'}
//  ]
//});

export default Blog;
