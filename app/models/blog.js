import DS from 'ember-data';

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
  comments: attr(),
  cached_tags: attr(),
  category: attr(),
  created_at: attr('date'),
  content_updated_at: attr('date')
});

export default Blog;
