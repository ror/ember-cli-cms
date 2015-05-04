import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
    brief_content: attr(),
    user: attr(),
    blog: attr()
});
