import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  blog_id: attr(),
  account_id: attr(),
  content: attr(),
  brief_content: attr(),
  md_content: attr(),
  user: attr(),
  blog: attr(),
  created_at: attr()
});
