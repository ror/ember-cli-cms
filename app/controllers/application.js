import Ember from 'ember';
/*global $*/
export default Ember.Controller.extend({
  //fixme 刷新之后消失
  currentUser: function () {
    if (this.get('session.isAuthenticated')){
      return this.store.find('user', this.get('session.content.secure.account_id')).then(
        function (user) {
          return user.data;
        },

        function () {
          return null;
        }
      );
    }else{
      return null;
    }
  }.property('session.isAuthenticated'),

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
      $('#headerDiv').toggleClass("moveRight");
      $('#footerDiv').toggleClass("moveRight");
      $('#menu').toggleClass("open");
    }
  }
});
