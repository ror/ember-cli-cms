import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  have_comments: function () {
    if (this.get('model.comments_count') > 0){
      return true;
    }else{
      return false;
    }
  }.property('model.comments_count'),

  can_comment: function () {
    if(this.get('model.commentable') && this.get('session').isAuthenticated){
      return true;
    }else{
      return false;
    }
  }.property('model.commentable', 'session.isAuthenticated')

});
