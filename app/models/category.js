import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
    name: attr(),
    role: attr(),   // 这里的content与系统方法重名，不能用于属性名称
    is_menu: attr(),   // 这里的content与系统方法重名，不能用于属性名称
    created_at: attr('date'),
    updated_at: attr('date'),

    blogs: DS.hasMany('blog')
});
