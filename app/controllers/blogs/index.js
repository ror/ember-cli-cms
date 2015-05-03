import Ember from 'ember';

export default Ember.ArrayController.extend({
    queryParams: ['category'],
    category: null,

    filteredBlogs: function () {
        var category = this.get('category');
        var blogs = this.get('model');

        if (category) {
            return blogs.filterBy('category', category);
        } else {
            return blogs;
        }
    }.property('category', 'model'),

    desc: function () {
        var txt = "blogs.desc.";
        txt += this.get('category');
        return this.t(txt);
    }.property('category')

});
