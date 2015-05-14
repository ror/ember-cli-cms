import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  slug_url: attr(),
  body: attr(),
  user: attr(),
  view_count: attr(),
  created_at: attr('date'),
  updated_at: attr('date')
});
