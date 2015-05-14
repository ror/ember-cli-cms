import Ember from 'ember';
/*global $*/
export default Ember.Controller.extend({
  categories: function () {
    return this.store.find('category');
  }.property(),

  //fixme emberjs的数据结构
  menus: function () {
    var menus = [];
    this.get("categories").forEach(function (category) {
      if (category.is_menu = true) {
        menus.push(category);
      }
    });

    return menus;
  }.property('categories'),

  actions: {
    toggleMobileMenu: function () {
      $('#containerDiv').toggleClass("moveRight");
      $('#menu').toggleClass("open");
    }
  }
});
