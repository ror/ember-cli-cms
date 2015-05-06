import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.ArrayController.extend({
    // setup our query params
    queryParams: ["category", "page", "perPage"],

    // set default values, can cause problems if left out
    // if value matches default, it won't display in the URL
    page: 1,
    perPage: 10,

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

    // can be called anything, I've called it pagedContent
    // remember to iterate over pagedContent in your template
    pagedContent: pagedArray('filteredBlogs', {pageBinding: "page", perPageBinding: "perPage"}),

    // binding the property on the paged array
    // to a property on the controller
    totalPagesBinding: "pagedContent.totalPages",

    desc: function () {
        var txt = "blogs.desc.";
        if (this.get('category')){
            txt += this.get('category');
        } else {
            txt = "blogs.title";
        }

        return this.t(txt);
    }.property('category')

});
