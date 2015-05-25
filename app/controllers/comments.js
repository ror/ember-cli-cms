import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.ArrayController.extend({
  // setup our query params
  queryParams: ["page", "perPage"],

  // set default values, can cause problems if left out
  // if value matches default, it won't display in the URL
  page: 1,
  perPage: 10,

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedContent: pagedArray('content', {pageBinding: "page", perPageBinding: "perPage"}),

  // binding the property on the paged array
  // to a property on the controller
  totalPagesBinding: "pagedContent.totalPages",

  showPagedBtm: function () {
    console.log(this.get('totalPages'));
    return this.get('totalPages') > 1;
  }.property('totalPage'),

  //fixme 跳转页面要归0
  _clearAll: function () {
    console.log("clear");
    this.set('page', 1);
  }.on('init')

});
