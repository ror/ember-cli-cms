import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr(),
  surname: attr(),
  email: attr(),
  password: attr(),
  password_confirmation: attr()
});
