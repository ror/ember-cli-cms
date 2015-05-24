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
  }.property('model.commentable', 'session.isAuthenticated'),

  actions: {
    add_comment: function(){
      //var _this = this;

      var comment = this.store.createRecord('comment', {
        content: this.get("body"),
        blog_id: this.get('model.id'),
        account_id: this.get('session.content.secure.account_id')
      });

      comment.save().then(
        function (c) {
          console.log(c);
          // fixme 添加成功信息，更新评论列表，实时显示给用户
          // var blog = _this.modelFor('blogs.index');
          //blog.get('comments').pushObject(c);
          //return _this.store.push('comment', _this.store.normalize('comment', c.data));
        }
      );
    }
  }

});
