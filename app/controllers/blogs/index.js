import Ember from 'ember';

export default Ember.ArrayController.extend({
    queryParams: ['category'],
    category: null,

    filteredBlogs: function() {
        var category = this.get('category');
        var blogs = this.get('model');

        if (category) {
            return blogs.filterBy('category', category);
        } else {
            return blogs;
        }
    }.property('category', 'model')
});
