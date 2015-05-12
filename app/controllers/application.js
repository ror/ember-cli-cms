import Ember from 'ember';
/*global $*/
export default Ember.Controller.extend({
  categories: function () {
    return this.store.find('category');
  }.property(),

  //fixme emberjs的数据结构
  menus: function () {
    //return this.get("categories").map(function(item) {
    //    if (item.is_menu = true) { return item; }
    //});
    var menus = [];
    this.get("categories").forEach(function (category) {
      console.log(category);
      if (category.is_menu = true) {
        menus.push(category);
      }
    });

    return menus;
  }.property('categories'),

  actions: {
    toggle: function () {
      console.log("hello");
      $('#containerDiv').toggleClass("moveRight");
      $('#menu').toggleClass("open");
    }
  }
});
